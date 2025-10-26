import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaUserCircle,
} from 'react-icons/fa';

const Navber = () => {
  return (
    <div className="flex justify-between items-center  py-3 px-6 ">
      <div className="flex items-center gap-2 text-xl font-bold">
       
      </div>

      <div className="flex gap-6 text-gray-700 font-medium">
        <NavLink
          to="/"
          className="flex items-center gap-2 hover:text-secondary transition-colors duration-200"
        >
          <FaHome /> Home
        </NavLink>

        <NavLink
          to="/about"
          className="flex items-center gap-2 hover:text-secondary transition-colors duration-200"
        >
          <FaInfoCircle /> About
        </NavLink>

        <NavLink
          to="/career"
          className="flex items-center gap-2 hover:text-secondary transition-colors duration-200"
        >
          <FaBriefcase /> Career
        </NavLink>
      </div>

      <div className="flex items-center gap-2">
        <div className='border-2 border-gray-600  p-1 rounded-full'>  <FaUserCircle className="text-3xl text-gray-700" /></div>
      
        <button className="bg-accent text-white px-5 py-2 rounded-md font-semibold shadow hover:bg-secondary/80 transition-all">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navber;
