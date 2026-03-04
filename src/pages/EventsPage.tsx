// src/pages/EventsPage.tsx
import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { fetchUserSpecificEvents } from "../services/api";
import { Event } from "../types/Event";

const EventsPage: React.FC = () =>
{
  const [ events, setEvents ] = useState<Event[]>( [] );
  const [ loading, setLoading ] = useState( true );
  const [ currentPage, setCurrentPage ] = useState( 1 );
  const itemsPerPage = 10;

  useEffect( () =>
  {
    const getEvents = async () =>
    {
      try
      {
        const data = await fetchUserSpecificEvents();
        setEvents( data );
      } catch ( error )
      {
        console.error( "Failed to fetch events:", error );
      } finally
      {
        setLoading( false );
      }
    };

    getEvents();
  }, [] );

  if ( loading )
  {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 
                        border-primary-600 border-t-transparent mb-4"></div>
          <p className="text-neutral-600 text-lg font-medium">Loading events...</p>
        </div>
      </div>
    );
  }

  const totalPages = Math.ceil( events.length / itemsPerPage );
  const currentEvents = events.slice(
    ( currentPage - 1 ) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () =>
  {
    setCurrentPage( ( prev ) => Math.max( prev - 1, 1 ) );
    window.scrollTo( { top: 0, behavior: 'smooth' } );
  };

  const handleNextPage = () =>
  {
    setCurrentPage( ( prev ) => Math.min( prev + 1, totalPages ) );
    window.scrollTo( { top: 0, behavior: 'smooth' } );
  };

  const goToPage = ( page: number ) =>
  {
    setCurrentPage( page );
    window.scrollTo( { top: 0, behavior: 'smooth' } );
  };

  // Generate page numbers to display
  const getPageNumbers = () =>
  {
    const pages = [];
    const showPages = 5; // Number of page buttons to show

    let startPage = Math.max( 1, currentPage - Math.floor( showPages / 2 ) );
    let endPage = Math.min( totalPages, startPage + showPages - 1 );

    if ( endPage - startPage < showPages - 1 )
    {
      startPage = Math.max( 1, endPage - showPages + 1 );
    }

    for ( let i = startPage; i <= endPage; i++ )
    {
      pages.push( i );
    }

    return pages;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      {/* Header Section */}
      <div className="bg-white border-b border-neutral-200 pt-20 pb-8 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-3">
              All Events
            </h1>
            <p className="text-lg text-neutral-600">
              Showing {currentEvents.length} of {events.length} events
            </p>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="container mx-auto px-6 py-10">
        {currentEvents.length > 0 ? (
          <div className="space-y-6">
            {currentEvents.map( ( event ) => (
              <EventCard key={event.route_url} event={event} />
            ) )}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-neutral-900 mb-2">No Events Found</h3>
            <p className="text-neutral-600">Check back later for upcoming events</p>
          </div>
        )}
      </div>

      {/* Pagination - Enhanced Design */}
      {totalPages > 1 && (
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-lg border-t border-neutral-200 
                      shadow-overlay py-6 mt-10">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Page Info */}
              <div className="text-sm text-neutral-600 font-medium">
                Page <span className="text-neutral-900 font-semibold">{currentPage}</span> of{" "}
                <span className="text-neutral-900 font-semibold">{totalPages}</span>
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-base
                    ${ currentPage === 1
                      ? "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                      : "bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-primary-600 hover:text-primary-600 shadow-raised hover:shadow-floating"
                    }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Page Numbers */}
                <div className="hidden sm:flex items-center gap-2">
                  {getPageNumbers().map( ( pageNum ) => (
                    <button
                      key={pageNum}
                      onClick={() => goToPage( pageNum )}
                      className={`min-w-[40px] h-10 px-3 rounded-lg font-medium transition-all duration-base
                        ${ pageNum === currentPage
                          ? "bg-primary-600 text-white shadow-raised"
                          : "bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-primary-600 hover:text-primary-600"
                        }`}
                    >
                      {pageNum}
                    </button>
                  ) )}
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-base
                    ${ currentPage === totalPages
                      ? "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                      : "bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-primary-600 hover:text-primary-600 shadow-raised hover:shadow-floating"
                    }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Mobile Page Selector */}
              <div className="sm:hidden">
                <select
                  value={currentPage}
                  onChange={( e ) => goToPage( Number( e.target.value ) )}
                  className="px-4 py-2 bg-white border border-neutral-300 rounded-lg text-neutral-700 
                           font-medium focus:outline-none focus:border-primary-600 focus:ring-2 
                           focus:ring-primary-600/20 transition-all duration-base"
                >
                  {Array.from( { length: totalPages }, ( _, i ) => i + 1 ).map( ( page ) => (
                    <option key={page} value={page}>
                      Page {page}
                    </option>
                  ) )}
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
