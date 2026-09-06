import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Navber from '../Components/Navber';

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Navber />

      <main className="flex-1 py-6">
        <div className="container-90">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomeLayout;
