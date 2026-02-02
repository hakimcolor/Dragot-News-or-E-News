import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import HeadLine from '../Components/HeadLine';
import Footer from '../Components/Footer';
import Navber from '../Components/Navber';

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <section className="w-11/12 mx-auto my-4 bg-base-200 rounded-lg shadow-sm">
        <HeadLine />
      </section>

      <section className="w-11/12 mx-auto my-4 bg-white rounded-lg shadow-sm">
        <Navber />
      </section>

      <main className="grow w-11/12 mx-auto my-4">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_250px] gap-6">
          {/* Left Sidebar */}
          <aside className="hidden lg:block">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-4">
              <h3 className="font-bold text-primary mb-4 border-b pb-2">
                Categories
              </h3>
              <div className="space-y-2">
                <div className="p-2 hover:bg-gray-100 rounded cursor-pointer transition-colors">
                  📰 Breaking News
                </div>
                <div className="p-2 hover:bg-gray-100 rounded cursor-pointer transition-colors">
                  💼 Business
                </div>
                <div className="p-2 hover:bg-gray-100 rounded cursor-pointer transition-colors">
                  💻 Technology
                </div>
                <div className="p-2 hover:bg-gray-100 rounded cursor-pointer transition-colors">
                  ⚽ Sports
                </div>
                <div className="p-2 hover:bg-gray-100 rounded cursor-pointer transition-colors">
                  🎬 Entertainment
                </div>
                <div className="p-2 hover:bg-gray-100 rounded cursor-pointer transition-colors">
                  🏥 Health
                </div>
                <div className="p-2 hover:bg-gray-100 rounded cursor-pointer transition-colors">
                  🔬 Science
                </div>
                <div className="p-2 hover:bg-gray-100 rounded cursor-pointer transition-colors">
                  🏛️ Politics
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <Outlet />
          </section>

          {/* Right Sidebar */}
          <aside className="hidden lg:block">
            <div className="space-y-6">
              {/* Popular News */}
              <div className="bg-white rounded-lg shadow-sm p-4 sticky top-4">
                <h3 className="font-bold text-primary mb-4 border-b pb-2">
                  🔥 Popular Today
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <img
                      src="https://via.placeholder.com/60x60"
                      alt="News"
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-medium line-clamp-2">
                        Breaking: Major tech announcement...
                      </p>
                      <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <img
                      src="https://via.placeholder.com/60x60"
                      alt="News"
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-medium line-clamp-2">
                        Economic growth shows positive...
                      </p>
                      <p className="text-xs text-gray-500 mt-1">4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <img
                      src="https://via.placeholder.com/60x60"
                      alt="News"
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-medium line-clamp-2">
                        Sports update: Championship...
                      </p>
                      <p className="text-xs text-gray-500 mt-1">6 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weather Widget */}
              <div className="bg-linear-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-sm p-4">
                <h3 className="font-bold mb-3">🌤️ Weather</h3>
                <div className="text-center">
                  <div className="text-2xl font-bold">25°C</div>
                  <div className="text-sm opacity-90">Partly Cloudy</div>
                  <div className="text-xs opacity-75 mt-1">
                    Dhaka, Bangladesh
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-secondary text-white rounded-lg shadow-sm p-4">
                <h3 className="font-bold mb-3">📧 Stay Updated</h3>
                <p className="text-sm opacity-90 mb-3">
                  Get the latest news delivered to your inbox
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="input input-sm w-full text-gray-800"
                  />
                  <button className="btn btn-sm btn-accent w-full">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer className="bg-primary text-white mt-8" />
    </div>
  );
};

export default HomeLayout;
