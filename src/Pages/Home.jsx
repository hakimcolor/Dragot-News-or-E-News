import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaEye,
  FaStar,
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaFire,
  FaClock,
  FaComment,
  FaShare,
  FaBookmark,
} from 'react-icons/fa';

// Import local assets
import demoCardThumbnail from '../assets/demo-card-thumbnail.png';
import demoUser from '../assets/demo-user.png';

const Home = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [newsResponse, categoriesResponse] = await Promise.all([
          fetch('/news.json'),
          fetch('/categories.json'),
        ]);

        const newsData = await newsResponse.json();
        const categoriesData = await categoriesResponse.json();

        setNews(newsData);
        setCategories(categoriesData);
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const featuredNews = news
    .filter((item) => item.others?.is_today_pick)
    .slice(0, 1);
  const trendingNews = news
    .filter((item) => item.others?.is_trending)
    .slice(0, 4);
  const latestNews = news.slice(0, 8);
  const businessNews = news
    .filter((item) => item.category_id === 2)
    .slice(0, 3);
  const techNews = news.filter((item) => item.category_id === 3).slice(0, 3);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getImageSrc = (imageUrl, fallback = demoCardThumbnail) => {
    return imageUrl || fallback;
  };

  const getUserImageSrc = (imageUrl, fallback = demoUser) => {
    return imageUrl || fallback;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="skeleton h-48 w-full rounded-lg mb-4"></div>
                <div className="skeleton h-4 w-3/4 mb-2"></div>
                <div className="skeleton h-4 w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        {featuredNews.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="featured-article rounded-2xl p-8 bg-white shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="category-pill">Editor's Pick</span>
                    <span className="trending-badge px-3 py-1 rounded-full text-xs font-bold">
                      <FaFire className="inline mr-1" />
                      TRENDING
                    </span>
                  </div>

                  <Link to={`/news/${featuredNews[0].id}`}>
                    <h1 className="text-headline text-3xl lg:text-4xl mb-4 hover:text-secondary transition-colors cursor-pointer">
                      {featuredNews[0].title}
                    </h1>
                  </Link>

                  <p className="text-body text-gray-600 text-lg mb-6 line-clamp-3">
                    {featuredNews[0].details}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={getUserImageSrc(featuredNews[0].author.img)}
                        alt={featuredNews[0].author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {featuredNews[0].author.name}
                        </p>
                        <p className="byline-text">
                          {formatDate(featuredNews[0].author.published_date)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <FaEye />
                        <span>{featuredNews[0].total_view}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaStar className="text-yellow-500" />
                        <span>{featuredNews[0].rating.number}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Link to={`/news/${featuredNews[0].id}`}>
                    <img
                      src={getImageSrc(featuredNews[0].image_url)}
                      alt={featuredNews[0].title}
                      className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Trending Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <h2 className="text-subheadline text-2xl font-serif">
                  Trending Now
                </h2>
                <div className="section-divider flex-1"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trendingNews.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="article-card bg-white rounded-xl p-6 shadow-sm"
                  >
                    <Link to={`/news/${article.id}`} className="block">
                      <div className="flex space-x-4">
                        <img
                          src={getImageSrc(article.thumbnail_url)}
                          alt={article.title}
                          className="w-24 h-24 object-cover rounded-lg shrink-0"
                        />
                        <div className="flex-1">
                          <h3 className="headline-text text-lg mb-2 line-clamp-2 hover:text-secondary transition-colors">
                            {article.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <div className="flex items-center space-x-1">
                              <FaClock />
                              <span>
                                {formatDate(article.author.published_date)}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <FaEye />
                              <span>{article.total_view}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Latest News */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <h2 className="text-subheadline text-2xl font-serif">
                  Latest News
                </h2>
                <div className="section-divider flex-1"></div>
              </div>

              <div className="news-grid">
                {latestNews.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="article-card bg-white rounded-xl overflow-hidden shadow-sm"
                  >
                    <Link to={`/news/${article.id}`}>
                      <div className="relative">
                        <img
                          src={getImageSrc(article.thumbnail_url)}
                          alt={article.title}
                          className="w-full h-48 object-cover"
                        />
                        {article.others?.is_today_pick && (
                          <div className="absolute top-3 left-3">
                            <span className="category-pill">Editor's Pick</span>
                          </div>
                        )}
                        <div className="absolute bottom-3 right-3 flex space-x-2">
                          <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
                            <FaBookmark className="text-gray-600 text-sm" />
                          </button>
                          <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
                            <FaShare className="text-gray-600 text-sm" />
                          </button>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="headline-text text-xl mb-3 line-clamp-2 hover:text-secondary transition-colors">
                          {article.title}
                        </h3>

                        <p className="subheadline-text text-sm mb-4 line-clamp-2">
                          {article.details}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <img
                              src={getUserImageSrc(article.author.img)}
                              alt={article.author.name}
                              className="w-6 h-6 rounded-full object-cover"
                            />
                            <span className="byline-text">
                              {article.author.name}
                            </span>
                          </div>

                          <div className="flex items-center space-x-3 text-xs text-gray-500">
                            <div className="flex items-center space-x-1">
                              <FaEye />
                              <span>{article.total_view}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <FaStar className="text-yellow-500" />
                              <span>{article.rating.number}</span>
                            </div>
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
          <div className="space-y-8">
            {/* Business Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="sidebar-widget p-6"
            >
              <h3 className="text-subheadline text-xl font-serif mb-4 border-b border-gray-200 pb-2">
                💼 Business
              </h3>
              <div className="space-y-4">
                {businessNews.map((article, index) => (
                  <Link
                    key={article.id}
                    to={`/news/${article.id}`}
                    className="block group"
                  >
                    <div className="flex space-x-3">
                      <img
                        src={getImageSrc(article.thumbnail_url)}
                        alt={article.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-secondary transition-colors">
                          {article.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {formatDate(article.author.published_date)}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Technology Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="sidebar-widget p-6"
            >
              <h3 className="text-subheadline text-xl font-serif mb-4 border-b border-gray-200 pb-2">
                💻 Technology
              </h3>
              <div className="space-y-4">
                {techNews.map((article, index) => (
                  <Link
                    key={article.id}
                    to={`/news/${article.id}`}
                    className="block group"
                  >
                    <div className="flex space-x-3">
                      <img
                        src={getImageSrc(article.thumbnail_url)}
                        alt={article.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-secondary transition-colors">
                          {article.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {formatDate(article.author.published_date)}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-linear-to-br from-secondary to-red-600 text-white rounded-xl p-6"
            >
              <h3 className="text-xl font-serif mb-3">📧 Stay Informed</h3>
              <p className="text-sm opacity-90 mb-4">
                Get the latest news delivered straight to your inbox
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full bg-white text-secondary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
