import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { FaNewspaper, FaGlobe, FaSearch, FaBell, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  const today = new Date();
  const dayName = format(today, 'EEEE');
  const fullDate = format(today, 'MMMM do, yyyy');
  const time = format(today, 'h:mm a');

  return (
    <header className="newspaper-header">
      {/* Top Bar */}
      <div className="bg-black text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
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

      {/* Main Header */}
      <div className="bg-white border-b-4 border-secondary">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Logo Section */}
            <Link
              to="/"
              className="flex flex-col items-center lg:items-start mb-4 lg:mb-0"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={logo}
                  alt="Dragon News"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h1 className="text-headline text-4xl lg:text-5xl text-primary font-serif">
                    Dragon News
                  </h1>
                  <p className="text-sm text-gray-600 font-medium tracking-wide">
                    JOURNALISM WITHOUT FEAR OR FAVOUR
                  </p>
                </div>
              </div>
            </Link>

            {/* Weather & Date Info */}
            <div className="hidden lg:flex flex-col items-end text-right">
              <div className="text-2xl font-serif font-bold text-primary">
                {dayName}
              </div>
              <div className="text-lg text-gray-700">{fullDate}</div>
              <div className="text-sm text-gray-500 mt-1">
                {time} • Dhaka Time
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breaking News Ticker */}
      <div className="breaking-news text-white py-2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center">
            <div className="flex items-center space-x-2 mr-6 shrink-0">
              <FaNewspaper className="text-lg" />
              <span className="font-bold text-sm uppercase tracking-wide">
                Breaking News
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

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;
