import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaFire,
  FaNewspaper,
} from 'react-icons/fa';

const Navber = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `relative px-4 py-2 font-medium transition-all duration-300 ${
      isActive
        ? 'text-secondary border-b-2 border-secondary'
        : 'text-gray-700 hover:text-secondary hover:border-b-2 hover:border-secondary'
    }`;

  const categories = [
    { id: 0, name: 'All News', path: '/category/0' },
    { id: 1, name: 'Breaking', path: '/category/1' },
    { id: 2, name: 'Business', path: '/category/2' },
    { id: 3, name: 'Technology', path: '/category/3' },
    { id: 5, name: 'Sports', path: '/category/5' },
    { id: 6, name: 'Entertainment', path: '/category/6' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={linkClasses}>
              <div className="flex items-center space-x-2">
                <FaHome className="text-sm" />
                <span>Home</span>
              </div>
            </NavLink>

            <NavLink to="/about" className={linkClasses}>
              <div className="flex items-center space-x-2">
                <FaInfoCircle className="text-sm" />
                <span>About</span>
              </div>
            </NavLink>

            <NavLink to="/career" className={linkClasses}>
              <div className="flex items-center space-x-2">
                <FaBriefcase className="text-sm" />
                <span>Career</span>
              </div>
            </NavLink>
          </div>

          {/* Category Pills */}
          <div className="hidden lg:flex items-center space-x-2">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.path}
                className="px-3 py-1 text-xs font-semibold text-gray-600 hover:text-white hover:bg-secondary rounded-full transition-all duration-300 border border-gray-300 hover:border-secondary"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Trending Button */}
            <div className="hidden md:flex items-center space-x-2 px-3 py-1 bg-linear-to-r from-orange-400 to-red-500 text-white rounded-full text-xs font-bold">
              <FaFire className="animate-pulse" />
              <span>TRENDING</span>
            </div>

            {/* User Profile */}
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: [0, -5, 5, 0],
              }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="w-10 h-10 bg-linear-to-br from-secondary to-red-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg">
                <FaUserCircle className="text-white text-lg" />
              </div>
            </motion.div>

            {/* Login Button */}
            <Link
              to="/login"
              className="hidden md:block bg-secondary hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Login
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-xl text-gray-700" />
              ) : (
                <FaBars className="text-xl text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white border-t border-gray-200"
        >
          <div className="py-4 space-y-2">
            {/* Main Navigation Links */}
            <NavLink
              to="/"
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaHome />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/about"
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaInfoCircle />
              <span>About</span>
            </NavLink>

            <NavLink
              to="/career"
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaBriefcase />
              <span>Career</span>
            </NavLink>

            {/* Categories */}
            <div className="px-4 py-2">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Categories
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={category.path}
                    className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:bg-secondary hover:text-white rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FaNewspaper className="text-xs" />
                    <span>{category.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Login Button */}
            <div className="px-4 pt-4 border-t border-gray-200">
              <Link
                to="/login"
                className="block w-full bg-secondary hover:bg-red-700 text-white text-center px-6 py-3 rounded-full font-semibold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navber;
