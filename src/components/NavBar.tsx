import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavBarProps
{
    isAuthenticated: boolean;
}

const NavBar: React.FC<NavBarProps> = ( { isAuthenticated } ) =>
{
    const location = useLocation();
    const [ mobileMenuOpen, setMobileMenuOpen ] = useState( false );

    const isActive = ( path: string ) => location.pathname === path;

    const navItems = [
        { path: '/', label: 'Home', auth: false },
        { path: '/events', label: 'Events', auth: true },
        { path: '/calendar', label: 'Calendar', auth: true },
        { path: '/documentation', label: 'Documentation', auth: false },
    ];

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
                {navItems.map( ( item ) =>
                {
                    if ( item.auth && !isAuthenticated ) return null;

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-base
                                ${ isActive( item.path )
                                    ? 'bg-primary-50 text-primary-700 shadow-sm'
                                    : 'text-neutral-700 hover:bg-neutral-50 hover:text-primary-600'
                                }`}
                        >
                            {item.label}
                        </Link>
                    );
                } )}
            </nav>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMobileMenuOpen( !mobileMenuOpen )}
                className="md:hidden p-2 text-neutral-700 hover:bg-neutral-50 rounded-lg 
                         transition-colors duration-base"
                aria-label="Toggle menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {mobileMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile Navigation Overlay */}
            {mobileMenuOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm z-40 md:hidden"
                        onClick={() => setMobileMenuOpen( false )}
                    />
                    <div className="fixed top-16 left-0 right-0 bg-white border-b border-neutral-200 
                                  shadow-overlay z-50 md:hidden">
                        <nav className="container mx-auto px-6 py-4">
                            <div className="flex flex-col gap-2">
                                {navItems.map( ( item ) =>
                                {
                                    if ( item.auth && !isAuthenticated ) return null;

                                    return (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            onClick={() => setMobileMenuOpen( false )}
                                            className={`px-4 py-3 rounded-lg font-medium transition-all duration-base
                                                ${ isActive( item.path )
                                                    ? 'bg-primary-50 text-primary-700'
                                                    : 'text-neutral-700 hover:bg-neutral-50 hover:text-primary-600'
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                } )}
                            </div>
                        </nav>
                    </div>
                </>
            )}
        </>
    );
};

export default NavBar;
