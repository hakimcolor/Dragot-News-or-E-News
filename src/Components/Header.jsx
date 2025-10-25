import React from 'react'
import logo from '../assets/logo.png'

import { format } from 'date-fns';
const Header = () => {
  const today = format(new Date(), 'EEEE, MMMM do, yyyy');
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={logo} alt=" Logo is her ..wait ok " />
      <p>Journalism Without Fear or Favour</p>
      <p> {today}</p>
    </div>
  );
}

export default Header
