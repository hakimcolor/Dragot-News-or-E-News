import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { FaNewspaper, FaGlobe, FaSearch, FaBell, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const today = new Date();
  const dayName = format(today, 'EEEE');
  const fullDate = format(today, 'MMMM do, yyyy');
  const time = format(today, 'h:mm a');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`newspaper-header sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'shadow-2xl' : ''
      }`}
    >
      {/* Top Bar — hides on scroll */}
      <div
        className={`bg-black text-white overflow-hidden transition-all duration-300 ease-in-out ${
          scrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-12 py-2 opacity-100'
        }`}
      >
        <div className="container-90 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaGlobe className="text-secondary" />
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="hidden md:block">
              <span className="text-gray-300">
                {dayName}, {fullDate}
              </span>
            </div>
            <div className="hidden md:block">
              <span className="text-gray-300">{time}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:text-secondary transition-colors">
              <FaSearch />
            </button>
            <button className="hover:text-secondary transition-colors">
              <FaBell />
            </button>
            <Link
              to="/login"
              className="hover:text-secondary transition-colors"
            >
              <FaUser />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header — shrinks on scroll */}
      <div className="bg-white border-b-4 border-secondary">
        <div className="container-90">
          <div
            className={`flex flex-col lg:flex-row items-center justify-between transition-all duration-300 ease-in-out ${
              scrolled ? 'py-2' : 'py-4'
            }`}
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex flex-col items-center lg:items-start mb-2 lg:mb-0"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={logo}
                  alt="Dragon News"
                  className={`object-contain transition-all duration-300 ${
                    scrolled ? 'h-7 w-7' : 'h-12 w-12'
                  }`}
                />
                <div>
                  <h1
                    className={`text-headline text-primary font-serif transition-all duration-300 ${
                      scrolled ? 'text-2xl lg:text-3xl' : 'text-4xl lg:text-5xl'
                    }`}
                  >
                    Dragon News
                  </h1>
                  {!scrolled && (
                    <p className="text-sm text-gray-600 font-medium tracking-wide">
                      JOURNALISM WITHOUT FEAR OR FAVOUR
                    </p>
                  )}
                </div>
              </div>
            </Link>

            {/* Date Info */}
            <div className="hidden lg:flex flex-col items-end text-right">
              <div
                className={`font-serif font-bold text-primary transition-all duration-300 ${
                  scrolled ? 'text-base' : 'text-2xl'
                }`}
              >
                {dayName}
              </div>
              {!scrolled && (
                <>
                  <div className="text-lg text-gray-700">{fullDate}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {time} • Dhaka Time
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Breaking News Ticker */}
      <div className="breaking-news text-white py-2 overflow-hidden">
        <div className="container-90">
          <div className="flex items-center">
            <div className="flex items-center space-x-2 mr-6 shrink-0">
              <FaNewspaper className="text-lg" />
              <span className="font-bold text-sm uppercase tracking-wide">
                Breaking
              </span>
            </div>
            <div className="flex animate-marquee whitespace-nowrap">
              <span className="mx-8">
                🚨 PM announces new economic reforms to boost startup ecosystem
                in South Asia
              </span>
              <span className="mx-8">
                📈 Dhaka Stock Exchange sees record gains as tech sector leads
                strong rally
              </span>
              <span className="mx-8">
                🌐 Global Summit 2025: Leaders unite in Geneva to discuss AI
                governance
              </span>
              <span className="mx-8">
                ⚽ Sports Update: Bangladesh advances to semifinals after
                thrilling 3-2 win
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;
