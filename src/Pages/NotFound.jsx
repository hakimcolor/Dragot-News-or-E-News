import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaSearch } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl font-bold text-secondary mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been
            moved, deleted, or you entered the wrong URL.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn btn-secondary btn-wide">
              <FaHome className="mr-2" />
              Go Home
            </Link>
            <Link
              to="/category/0"
              className="btn btn-outline btn-secondary btn-wide"
            >
              <FaSearch className="mr-2" />
              Browse News
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>
              If you think this is an error, please contact our support team.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
