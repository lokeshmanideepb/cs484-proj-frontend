// src/components/EventCard.tsx
import { RoomOutlined } from "@mui/icons-material";
import parse from "html-react-parser";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../pages/AuthContext";
import { addEventToCalendar } from "../services/calendarService";
import { Event } from "../types/Event";
import { DateTimeUtils } from "../utils/DateTimeUtils";

interface EventCardProps
{
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ( { event } ) =>
{
  const history = useNavigate();
  const { account } = useAuth();

  const truncatedContent = ( html: string, maxWords: number ) =>
  {
    const words = html.split( " " );
    return words.length > maxWords
      ? words.slice( 0, maxWords ).join( " " ) + "..."
      : html;
  };

  function removeImgTags ( html: string ): string
  {
    const div = document.createElement( "div" );
    div.innerHTML = html;
    const imgTags = div.querySelectorAll( "img" );
    imgTags.forEach( ( img ) => img.remove() );
    return div.innerHTML;
  }

  const handleShowMore = () =>
  {
    history( `/event/${ event.route_url }` );
  };

  const handleAddToCalendar = () =>
  {
    addEventToCalendar( event, account );
  };

  let eventDate = DateTimeUtils.parseDate( event.event_date );
  if ( !eventDate )
  {
    eventDate = new Date();
  }
  let tillDateString: string | null = null;
  if ( event.till_date )
  {
    const tillDate = DateTimeUtils.parseDate( event.till_date );
    if ( tillDate )
    {
      tillDateString = DateTimeUtils.toLongDateString( tillDate );
    }
  }
  const text = truncatedContent( removeImgTags( event.description ), 50 );

  return (
    <div className="max-w-5xl mx-auto mb-6 bg-white rounded-2xl shadow-raised hover:shadow-floating 
                    transition-all duration-base hover:-translate-y-0.5 border border-neutral-200 
                    overflow-hidden group">
      <div className="flex flex-col md:flex-row">
        {/* Image Section - with gradient overlay */}
        <div className="md:w-80 flex-shrink-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-base z-10"></div>
          <img
            className="w-full h-56 md:h-full object-cover transform group-hover:scale-105 
                       transition-transform duration-slow"
            src={event.image_url ? event.image_url : "https://placehold.co/400"}
            alt={event.title}
          />

          {/* Date Badge - floating on image */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl 
                          px-4 py-2 shadow-raised z-20">
            <div className="text-primary-600 font-bold text-2xl leading-none">
              {eventDate.getDate()}
            </div>
            <div className="text-neutral-600 text-xs font-medium uppercase tracking-wide">
              {eventDate.toLocaleDateString( 'en-US', { month: 'short' } )}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 md:p-8 flex flex-col">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3 
                         group-hover:text-primary-600 transition-colors duration-base">
            {event.title}
          </h2>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-neutral-600">
            {event.location && (
              <div className="flex items-center gap-1.5">
                <RoomOutlined className="text-neutral-500" style={{ fontSize: '18px' }} />
                <span className="font-medium">{event.location}</span>
              </div>
            )}

            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">
                {event.from_time}{event.to_time ? ` - ${ event.to_time }` : ""}
              </span>
            </div>

            {tillDateString && (
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">Until {tillDateString}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="flex-1 text-neutral-700 leading-relaxed mb-5">
            <div className="line-clamp-3">
              {parse( text )}
            </div>
            <button
              className="text-primary-600 hover:text-primary-700 font-medium mt-2 
                       inline-flex items-center gap-1 group/more transition-colors duration-base"
              onClick={handleShowMore}
            >
              <span>Show more</span>
              <svg className="w-4 h-4 transform group-hover/more:translate-x-0.5 transition-transform"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              className="flex-1 md:flex-initial px-6 py-2.5 bg-primary-600 text-white rounded-xl 
                       font-medium shadow-raised hover:bg-primary-700 hover:shadow-floating 
                       transition-all duration-base transform hover:-translate-y-0.5"
              onClick={handleShowMore}
            >
              View Details
            </button>
            <button
              className="flex-1 md:flex-initial px-6 py-2.5 bg-success text-white rounded-xl 
                       font-medium shadow-raised hover:bg-success-dark hover:shadow-floating 
                       transition-all duration-base transform hover:-translate-y-0.5
                       inline-flex items-center justify-center gap-2"
              onClick={handleAddToCalendar}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add to Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
