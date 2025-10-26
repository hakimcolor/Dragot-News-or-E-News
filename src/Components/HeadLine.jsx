import React from 'react';
import Marquee from 'react-fast-marquee';

const HeadLine = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 bg-base-200 py-2 px-4">
      <button className="bg-secondary text-white px-4 sm:px-6 py-2 rounded-md font-semibold shadow-md uppercase text-sm sm:text-base">
        Latest
      </button>

      <Marquee
        pauseOnHover={true}
        speed={45}
        gradient={false}
        className="w-full flex gap-5 sm:gap-10 text-sm sm:text-base"
      >
        <p className="whitespace-nowrap">
          📰 PM announces new economic reforms to boost startup ecosystem in
          South Asia.
        </p>
        <p className="whitespace-nowrap  ml-5">
          🌐 Global Summit 2025: Leaders unite in Geneva to discuss AI
          governance and ethics.
        </p>
        <p className="whitespace-nowrap ml-5">
          💹 Dhaka Stock Exchange sees record gains as tech sector leads strong
          rally.
        </p>
        <p className="whitespace-nowrap ml-5">
          ⚽ Sports Update: Bangladesh advances to the semifinals after
          thrilling 3-2 win.
        </p>
        <p className="whitespace-nowrap ml-5">
          🧠 Science & Tech: NASA confirms successful landing of Artemis cargo
          module on the Moon.
        </p>
        <p className="whitespace-nowrap ml-5">
          🎬 Entertainment Buzz: “The Bengal Horizon” wins Best International
          Feature at Cannes.
        </p>
        <p className="whitespace-nowrap ml-5">
          🌦️ Weather Alert: Mild cold wave expected in northern districts from
          tomorrow.
        </p>
      </Marquee>
    </div>
  );
};

export default HeadLine;
