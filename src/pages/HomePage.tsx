import React from "react";
import { Link } from "react-router-dom";
import ChatWidget from "../components/ChatWidget";

const HomePage: React.FC = () =>
{
  function addDays ( date: Date, days: number ): Date
  {
    const result = new Date( date );
    result.setDate( result.getDate() + days );
    return result;
  }
  const today = new Date();
  const futureDate1 = addDays( today, 10 );
  const futureDate2 = addDays( today, 20 );
  const futureDate3 = addDays( today, 30 );

  return (
    <div className="bg-neutral-50 font-sans leading-normal tracking-normal mt-12">
      {/* Hero Section - Refined with better visual hierarchy */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white py-24 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Discover What's Happening at UIC
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-primary-50 leading-relaxed font-light">
              Stay connected with seminars, workshops, social events, and everything
              that makes campus life vibrant.
            </p>
            <Link
              to="/events"
              className="inline-block bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold 
                       shadow-floating hover:shadow-overlay hover:scale-105 
                       transition-all duration-base transform"
            >
              Explore Events
            </Link>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 48h1440V0c-360 48-720 48-1080 0L0 48z" fill="#fafbfc" />
          </svg>
        </div>
      </section>

      {/* Features Section - Card-based with elevation */}
      <section className="container mx-auto py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-neutral-900">
            Everything You Need
          </h2>
          <p className="text-center text-neutral-600 text-lg mb-12 max-w-2xl mx-auto">
            A platform designed to help you discover, organize, and never miss
            the events that matter to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-raised hover:shadow-floating 
                          transition-all duration-base hover:-translate-y-1 border border-neutral-200">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-neutral-900">
                Discover Events
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Browse through a curated collection of campus events.
                Filter by date, category, and interest to find exactly what you're looking for.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-raised hover:shadow-floating 
                          transition-all duration-base hover:-translate-y-1 border border-neutral-200">
              <div className="w-12 h-12 bg-accent-teal/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-neutral-900">
                Save Favorites
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Bookmark events that interest you and receive timely reminders.
                Build your personal calendar of upcoming activities.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-raised hover:shadow-floating 
                          transition-all duration-base hover:-translate-y-1 border border-neutral-200">
              <div className="w-12 h-12 bg-accent-purple/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-neutral-900">
                Share Your Events
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Hosting something? Add your event to the platform and reach
                the entire campus community instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section - Refined cards */}
      <section className="bg-gradient-to-b from-neutral-50 to-neutral-100 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-neutral-900 mb-3 text-center">
              Coming Up Soon
            </h2>
            <p className="text-center text-neutral-600 text-lg mb-12">
              Don't miss these featured events happening on campus
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Event Card 1 */}
              <div className="bg-white rounded-2xl shadow-raised hover:shadow-floating 
                            transition-all duration-base hover:-translate-y-1 overflow-hidden 
                            border border-neutral-200">
                <div className="h-2 bg-gradient-to-r from-primary-500 to-primary-600"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>
                      {futureDate1.toLocaleDateString( undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      } )}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Tech Conference 2024
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Join us for an exciting tech conference featuring industry
                    leaders and innovators.
                  </p>
                </div>
              </div>

              {/* Event Card 2 */}
              <div className="bg-white rounded-2xl shadow-raised hover:shadow-floating 
                            transition-all duration-base hover:-translate-y-1 overflow-hidden 
                            border border-neutral-200">
                <div className="h-2 bg-gradient-to-r from-accent-teal to-success"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>
                      {futureDate2.toLocaleDateString( undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      } )}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Yoga and Wellness
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Attend our wellness session for stress relief and mindfulness
                    techniques.
                  </p>
                </div>
              </div>

              {/* Event Card 3 */}
              <div className="bg-white rounded-2xl shadow-raised hover:shadow-floating 
                            transition-all duration-base hover:-translate-y-1 overflow-hidden 
                            border border-neutral-200">
                <div className="h-2 bg-gradient-to-r from-accent-purple to-accent-coral"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>
                      {futureDate3.toLocaleDateString( undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      } )}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Art Exhibition
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Explore an art exhibition showcasing works from university
                    students and local artists.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold text-lg 
                         hover:text-primary-700 transition-colors duration-base group"
              >
                View All Events
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-base"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ChatWidget />
    </div>
  );
};

export default HomePage;
