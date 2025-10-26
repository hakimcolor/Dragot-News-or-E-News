import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import HeadLine from '../Components/HeadLine';
import Footer from '../Components/Footer';
import Navber from '../Components/Navber';

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="w-11/12 mx-auto my-4 bg-base-200">
        <HeadLine />
      </section>
<section className='w-11/12 mx-auto my-4 '><Navber></Navber></section>
      <main className="flex-grow grid grid-cols-[1fr_3fr_1fr] gap-4 bg-gray-50">
        <section className="bg-yellow-200 p-4">Left</section>
        <section className="bg-white p-4">
          <Outlet />
        </section>
        <section className="bg-green-200 p-4">Right</section>
      </main>

      <Footer className="bg-gray-800 text-white p-4 text-center" />
    </div>
  );
};

export default HomeLayout;
