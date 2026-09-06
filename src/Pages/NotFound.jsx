import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaSearch } from 'react-icons/fa';

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-sm"
    >
      <div className="text-8xl font-bold text-secondary mb-2">404</div>
      <h2 className="text-2xl font-serif font-semibold text-primary mb-3">
        Page Not Found
      </h2>
      <p className="text-gray-500 text-sm mb-8 leading-relaxed">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          to="/"
          className="flex items-center justify-center gap-2 bg-secondary hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
        >
          <FaHome />
          Go Home
        </Link>
        <Link
          to="/category/0"
          className="flex items-center justify-center gap-2 border border-secondary text-secondary hover:bg-secondary hover:text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
        >
          <FaSearch />
          Browse News
        </Link>
      </div>
    </motion.div>
  </div>
);

export default NotFound;
