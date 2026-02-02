import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaEye,
  FaStar,
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
} from 'react-icons/fa';

// Import local assets
import demoCardThumbnail from '../assets/demo-card-thumbnail.png';
import demoUser from '../assets/demo-user.png';
import userImg from '../assets/user.png';

const Home = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load news and categories data
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

  const filteredNews =
    selectedCategory === 0
      ? news
      : news.filter((item) => item.category_id === selectedCategory);

  const featuredNews = news
    .filter((item) => item.others?.is_today_pick)
    .slice(0, 3);
  const trendingNews = news
    .filter((item) => item.others?.is_trending)
    .slice(0, 6);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Function to get fallback image
  const getImageSrc = (imageUrl, fallback = demoCardThumbnail) => {
    return imageUrl || fallback;
  };

  const getUserImageSrc = (imageUrl, fallback = demoUser) => {
    return imageUrl || fallback;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="loading loading-spinner loading-lg text-secondary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Hero Section with Featured News */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">
          Today's Picks
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredNews.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/news/${article.id}`}
                className="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer block"
              >
                <figure className="relative overflow-hidden">
                  <img
                    src={getImageSrc(article.thumbnail_url)}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = demoCardThumbnail;
                    }}
                  />
                  <div className="absolute top-3 right-3">
                    <span className="badge badge-secondary text-white font-semibold">
                      {article.rating.badge}
                    </span>
                  </div>
                </figure>

                <div className="card-body p-4">
                  <h3 className="card-title text-lg font-bold text-primary line-clamp-2 group-hover:text-secondary transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3 mt-2">
                    {article.details}
                  </p>

                  <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <img
                        src={getUserImageSrc(article.author.img)}
                        alt={article.author.name}
                        className="w-6 h-6 rounded-full object-cover"
                        onError={(e) => {
                          e.target.src = demoUser;
                        }}
                      />
                      <span>{article.author.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <FaEye className="text-xs" />
                        <span>{article.total_view}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-500 text-xs" />
                        <span>{article.rating.number}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <FaCalendarAlt />
                      <span>{formatDate(article.author.published_date)}</span>
                    </div>
                    <span className="text-secondary font-medium text-sm group-hover:underline">
                      Read More <FaArrowRight className="inline ml-1 text-xs" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Category Filter */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className={`btn btn-sm ${
                selectedCategory === category.id
                  ? 'btn-secondary text-white'
                  : 'btn-outline btn-secondary'
              } hover:scale-105 transition-transform`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Trending News Section */}
      {trendingNews.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">
            🔥 Trending Now
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trendingNews.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/news/${article.id}`}
                  className="flex gap-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer group block"
                >
                  <img
                    src={getImageSrc(article.thumbnail_url)}
                    alt={article.title}
                    className="w-24 h-24 object-cover rounded-lg shrink-0 group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = demoCardThumbnail;
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-primary line-clamp-2 group-hover:text-secondary transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <FaEye />
                        <span>{article.total_view}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-500" />
                        <span>{article.rating.number}</span>
                      </div>
                      <span>{formatDate(article.author.published_date)}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Main News Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">
          Latest News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.slice(0, 12).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Link
                to={`/news/${article.id}`}
                className="card bg-white shadow hover:shadow-lg transition-all duration-300 group cursor-pointer block"
              >
                <figure className="relative overflow-hidden">
                  <img
                    src={getImageSrc(article.thumbnail_url)}
                    alt={article.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = demoCardThumbnail;
                    }}
                  />
                  {article.others?.is_today_pick && (
                    <div className="absolute top-2 left-2">
                      <span className="badge badge-accent text-white text-xs">
                        Editor's Pick
                      </span>
                    </div>
                  )}
                </figure>

                <div className="card-body p-4">
                  <h3 className="card-title text-base font-semibold text-primary line-clamp-2 group-hover:text-secondary transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-2 mt-2">
                    {article.details}
                  </p>

                  <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                    <span>{article.author.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <FaEye />
                        <span>{article.total_view}</span>
                      </div>
                      <div className="flex items-center gap-1">
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

        <div className="text-center mt-8">
          <Link to="/category/0" className="btn btn-secondary btn-wide">
            View All Articles
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
