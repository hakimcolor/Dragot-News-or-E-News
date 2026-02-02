import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import HeadLine from '../Components/HeadLine';
import Footer from '../Components/Footer';
import Navber from '../Components/Navber';
import Weather from '../Components/Weather';
import demoCardThumbnail from '../assets/demo-card-thumbnail.png';

const HomeLayout = () => {
  const location = useLocation();

  // Function to check if a category link is active
  const isCategoryActive = (categoryId) => {
    return location.pathname === `/category/${categoryId}`;
  };

  // Category data for sidebar
  const categories = [
    { id: 1, name: 'Breaking News', emoji: '📰' },
    { id: 2, name: 'Business', emoji: '💼' },
    { id: 3, name: 'Technology', emoji: '💻' },
    { id: 5, name: 'Sports', emoji: '⚽' },
    { id: 6, name: 'Entertainment', emoji: '🎬' },
    { id: 4, name: 'Health', emoji: '🏥' },
    { id: 7, name: 'Science', emoji: '🔬' },
    { id: 8, name: 'Politics', emoji: '🏛️' },
  ];

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
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.id}`}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-2 ${
                      isCategoryActive(category.id)
                        ? 'bg-secondary text-white shadow-md transform scale-105'
                        : 'hover:bg-gray-100 text-gray-700 hover:text-secondary'
                    }`}
                  >
                    <span className="text-lg">{category.emoji}</span>
                    <span className="font-medium">{category.name}</span>
                    {isCategoryActive(category.id) && (
                      <span className="ml-auto text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                        Active
                      </span>
                    )}
                  </Link>
                ))}
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
                  <Link
                    to="/news/bcdefa0123456789bcdefa01"
                    className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                  >
                    <img
                      src={demoCardThumbnail}
                      alt="News"
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-medium line-clamp-2">
                        Bangladesh's Export Earnings Show Strong Growth...
                      </p>
                      <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                    </div>
                  </Link>
                  <Link
                    to="/news/23456789abcdef0123456789"
                    className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                  >
                    <img
                      src={demoCardThumbnail}
                      alt="News"
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-medium line-clamp-2">
                        Central Bank Announces New Monetary Policy...
                      </p>
                      <p className="text-xs text-gray-500 mt-1">4 hours ago</p>
                    </div>
                  </Link>
                  <Link
                    to="/news/cdefab0123456789cdefab01"
                    className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                  >
                    <img
                      src={demoCardThumbnail}
                      alt="News"
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-medium line-clamp-2">
                        Foreign Investment Reaches Record High...
                      </p>
                      <p className="text-xs text-gray-500 mt-1">6 hours ago</p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Live Weather Widget */}
              <Weather />

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
