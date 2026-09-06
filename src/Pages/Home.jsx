import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaEye,
  FaStar,
  FaFire,
  FaClock,
  FaShare,
  FaBookmark,
} from 'react-icons/fa';
import demoCardThumbnail from '../assets/demo-card-thumbnail.png';
import demoUser from '../assets/demo-user.png';

const Home = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [nr, cr] = await Promise.all([
          fetch('/news.json'),
          fetch('/categories.json'),
        ]);
        setNews(await nr.json());
        setCategories(await cr.json());
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const featured = news.filter((i) => i.others?.is_today_pick).slice(0, 1);
  const trending = news.filter((i) => i.others?.is_trending).slice(0, 4);
  const latest = news.slice(0, 8);
  const business = news.filter((i) => i.category_id === 2).slice(0, 3);
  const tech = news.filter((i) => i.category_id === 3).slice(0, 3);

  const fmt = (d) =>
    new Date(d).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  const img = (url) => url || demoCardThumbnail;
  const uimg = (url) => url || demoUser;

  if (loading)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
            <div className="skeleton h-32 w-full rounded-lg mb-3"></div>
            <div className="skeleton h-3 w-3/4 mb-2"></div>
            <div className="skeleton h-3 w-1/2"></div>
          </div>
        ))}
      </div>
    );

  return (
    <div className="space-y-8">
      {/* Hero / Featured */}
      {featured.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="featured-article bg-white rounded-xl shadow p-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="category-pill">Editor's Pick</span>
                  <span className="trending-badge px-3 py-1 rounded-full text-xs font-bold">
                    <FaFire className="inline mr-1" />
                    TRENDING
                  </span>
                </div>
                <Link to={`/news/${featured[0].id}`}>
                  <h1 className="text-headline text-2xl lg:text-3xl mb-3 hover:text-secondary transition-colors">
                    {featured[0].title}
                  </h1>
                </Link>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                  {featured[0].details}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={uimg(featured[0].author.img)}
                      alt=""
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm text-gray-900">
                        {featured[0].author.name}
                      </p>
                      <p className="byline-text">
                        {fmt(featured[0].author.published_date)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaEye />
                      {featured[0].total_view}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      {featured[0].rating.number}
                    </span>
                  </div>
                </div>
              </div>
              <Link to={`/news/${featured[0].id}`}>
                <img
                  src={img(featured[0].image_url)}
                  alt={featured[0].title}
                  className="w-full h-48 lg:h-56 object-cover rounded-lg shadow hover:shadow-lg transition-shadow"
                />
              </Link>
            </div>
          </div>
        </motion.section>
      )}

      {/* Main grid + sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Trending */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-subheadline text-xl font-serif whitespace-nowrap">
                Trending Now
              </h2>
              <div className="section-divider flex-1 mt-1"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trending.map((a, i) => (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="article-card bg-white rounded-lg p-4 shadow-sm"
                >
                  <Link to={`/news/${a.id}`} className="flex gap-3">
                    <img
                      src={img(a.thumbnail_url)}
                      alt={a.title}
                      className="w-20 h-20 object-cover rounded-lg shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="headline-text text-sm mb-1 line-clamp-2 hover:text-secondary transition-colors">
                        {a.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mt-2">
                        <span className="flex items-center gap-1">
                          <FaClock />
                          {fmt(a.author.published_date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaEye />
                          {a.total_view}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Latest News */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-subheadline text-xl font-serif whitespace-nowrap">
                Latest News
              </h2>
              <div className="section-divider flex-1 mt-1"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {latest.map((a, i) => (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="article-card bg-white rounded-lg overflow-hidden shadow-sm"
                >
                  <Link to={`/news/${a.id}`}>
                    <div className="relative">
                      <img
                        src={img(a.thumbnail_url)}
                        alt={a.title}
                        className="w-full h-36 object-cover"
                      />
                      {a.others?.is_today_pick && (
                        <div className="absolute top-2 left-2">
                          <span className="category-pill text-xs">Pick</span>
                        </div>
                      )}
                      <div className="absolute bottom-2 right-2 flex gap-1">
                        <button className="bg-white/90 p-1.5 rounded-full hover:bg-white transition-all">
                          <FaBookmark className="text-gray-600 text-xs" />
                        </button>
                        <button className="bg-white/90 p-1.5 rounded-full hover:bg-white transition-all">
                          <FaShare className="text-gray-600 text-xs" />
                        </button>
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="headline-text text-sm mb-2 line-clamp-2 hover:text-secondary transition-colors">
                        {a.title}
                      </h3>
                      <p className="subheadline-text text-xs mb-3 line-clamp-2">
                        {a.details}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <img
                            src={uimg(a.author.img)}
                            alt=""
                            className="w-5 h-5 rounded-full object-cover"
                          />
                          <span className="byline-text text-xs">
                            {a.author.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <FaEye />
                            {a.total_view}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaStar className="text-yellow-500" />
                            {a.rating.number}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Business */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="sidebar-widget p-4"
          >
            <h3 className="text-subheadline text-base font-serif mb-3 border-b border-gray-200 pb-2">
              💼 Business
            </h3>
            <div className="space-y-3">
              {business.map((a) => (
                <Link
                  key={a.id}
                  to={`/news/${a.id}`}
                  className="flex gap-2 group"
                >
                  <img
                    src={img(a.thumbnail_url)}
                    alt={a.title}
                    className="w-14 h-14 object-cover rounded-lg shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-xs line-clamp-2 group-hover:text-secondary transition-colors">
                      {a.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {fmt(a.author.published_date)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Technology */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="sidebar-widget p-4"
          >
            <h3 className="text-subheadline text-base font-serif mb-3 border-b border-gray-200 pb-2">
              💻 Technology
            </h3>
            <div className="space-y-3">
              {tech.map((a) => (
                <Link
                  key={a.id}
                  to={`/news/${a.id}`}
                  className="flex gap-2 group"
                >
                  <img
                    src={img(a.thumbnail_url)}
                    alt={a.title}
                    className="w-14 h-14 object-cover rounded-lg shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-xs line-clamp-2 group-hover:text-secondary transition-colors">
                      {a.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {fmt(a.author.published_date)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-linear-to-br from-secondary to-red-600 text-white rounded-lg p-4"
          >
            <h3 className="text-base font-serif mb-2">📧 Stay Informed</h3>
            <p className="text-xs opacity-90 mb-3">
              Get the latest news in your inbox daily.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-lg text-gray-800 text-sm focus:outline-none"
              />
              <button className="w-full bg-white text-secondary px-3 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
