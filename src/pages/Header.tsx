import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import NavBar from "../components/NavBar";
import { useAuth } from "./AuthContext";

const Header: React.FC = () =>
{
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useAuth();
  const [ loading, setLoading ] = useState( true );

  useEffect( () =>
  {
    if ( isAuthenticated !== undefined )
    {
      setLoading( false );
    }
  }, [ isAuthenticated ] );

  const handleLogin = () =>
  {
    navigate( "/login" );
  };

  const handleLogout = () =>
  {
    logout();
    navigate( "/" );
  };

  if ( loading )
  {
    return null;
  }

  return (
    <header className="bg-white border-b border-neutral-200 shadow-sm fixed w-full top-0 left-0 z-50 
                     backdrop-blur-lg bg-white/95">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-3 group transition-all duration-base"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-600/10 rounded-xl blur-md opacity-0 
                            group-hover:opacity-100 transition-opacity duration-base"></div>
              <img
                src={logo}
                alt="UIC Events Logo"
                className="w-11 h-11 rounded-xl relative shadow-raised 
                         group-hover:shadow-floating transition-all duration-base"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 
                             transition-colors duration-base">
                UIC Events
              </span>
              <span className="text-xs text-neutral-500 font-medium">
                Campus Event Hub
              </span>
            </div>
          </Link>

          {/* Navigation Bar */}
          <div className="flex-1 flex justify-center">
            <NavBar isAuthenticated={isAuthenticated && user?.preferences != null} />
          </div>

          {/* User Section */}
          <div className="flex items-center gap-4">
            {/* Display user info if authenticated */}
            {isAuthenticated && user && (
              <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-neutral-50 
                            rounded-xl border border-neutral-200">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 
                              rounded-full flex items-center justify-center text-white font-semibold 
                              shadow-raised">
                  {user.fullName.charAt( 0 ).toUpperCase()}
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-neutral-900 leading-tight">
                    {user.fullName}
                  </div>
                  <div className="text-xs text-neutral-600 leading-tight">
                    {user.email}
                  </div>
                </div>
              </div>
            )}

            {/* Auth Buttons */}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="px-5 py-2.5 bg-error text-white rounded-xl font-medium 
                         shadow-raised hover:bg-error-dark hover:shadow-floating 
                         transition-all duration-base transform hover:-translate-y-0.5"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="px-5 py-2.5 bg-primary-600 text-white rounded-xl font-medium 
                         shadow-raised hover:bg-primary-700 hover:shadow-floating 
                         transition-all duration-base transform hover:-translate-y-0.5"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
