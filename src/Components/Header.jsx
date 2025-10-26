import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
  const today = new Date();
  const dayName = format(today, 'EEEE'); 
  const restOfDate = format(today, 'MMMM do, yyyy'); 

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <img src={logo} alt="Logo is here" className="" />
      <p className="mt-2 text-center">Journalism Without Fear or Favour</p>
      <p className="mt-2 text-center">
        <span className="font-bold">{dayName}</span>
        <span className="text-gray-700">, {restOfDate}</span>
      </p>
    </div>
  );
};

export default Header;
