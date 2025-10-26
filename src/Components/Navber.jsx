import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaUserCircle,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navber = () => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-2 transition-colors duration-200 ${
      isActive
        ? 'text-yellow-600 font-bold'
        : 'text-gray-700 hover:text-secondary'
    }`;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center py-3 px-4 sm:px-6 gap-3 sm:gap-0">
      <div className="flex items-center gap-2 text-xl font-bold"></div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 font-medium text-sm sm:text-base">
        <NavLink to="/" className={linkClasses}>
          <FaHome /> Home
        </NavLink>

        <NavLink to="/about" className={linkClasses}>
          <FaInfoCircle /> About
        </NavLink>

        <NavLink to="/career" className={linkClasses}>
          <FaBriefcase /> Career
        </NavLink>
      </div>

      <div className="flex items-center gap-3">
        <motion.div
          whileHover={{
            borderColor: ['#ff0000', '#00ff00', '#0000ff', '#ff0000'],
            borderRadius: ['50%', '49%', '53%', '50%'],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="border-4 border-gray-500 p-2 rounded-full inline-block cursor-pointer"
        >
          <FaUserCircle className="text-3xl text-gray-700" />
        </motion.div>

        <NavLink to="/login">
          <button className="bg-accent text-white px-4 sm:px-5 py-2 rounded-md font-semibold shadow hover:bg-secondary/80 transition-all text-sm sm:text-base cursor-pointer">
            Login
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navber;
