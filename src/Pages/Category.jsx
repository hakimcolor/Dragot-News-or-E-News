import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaEye,
  FaStar,
  FaCalendarAlt,
  FaUser,
  FaArrowLeft,
} from 'react-icons/fa';

const Category = () => {
  const { categoryId } = useParams();
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [newsResponse, categoriesResponse] = await Promise.all([
          fetch('/news.json'),
          fetch('/categories.json'),
        ]);

        const newsData = await newsResponse.json();
        const categoriesData = await categoriesResponse.json();

        const catId = parseInt(categoryId);
        const category = categoriesData.find((cat) => cat.id === catId);
        const filteredNews =
          catId === 0
            ? newsData
            : newsData.filter((item) => item.category_id === catId);

        setNews(filteredNews);
        setCategories(categoriesData);
        setCurrentCategory(category);
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    };

    loadData();
  }, [categoryId]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="loading loading-spinner loading-lg text-secondary"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-6"
      >
        <Link
          to="/"
          className="btn btn-ghost text-secondary hover:bg-secondary hover:text-white"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
      </motion.div>

      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-primary mb-4 border-l-4 border-secondary pl-4">
          {currentCategory?.name || 'Category'}
        </h1>
        <p className="text-gray-600">
          {news.length} article{news.length !== 1 ? 's' : ''} found
        </p>
      </motion.div>

      {/* Category Filter Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className={`btn btn-sm ${
                parseInt(categoryId) === category.id
                  ? 'btn-secondary text-white'
                  : 'btn-outline btn-secondary'
              } hover:scale-105 transition-transform`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* News Grid */}
      {news.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {news.map((article, index) => (
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
                    src={article.thumbnail_url}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {article.others?.is_today_pick && (
                    <div className="absolute top-2 left-2">
                      <span className="badge badge-accent text-white text-xs">
                        Editor's Pick
                      </span>
                    </div>
                  )}
                  {article.others?.is_trending && (
                    <div className="absolute top-2 right-2">
                      <span className="badge badge-secondary text-white text-xs">
                        Trending
                      </span>
                    </div>
                  )}
                </figure>

                <div className="card-body p-4">
                  <h3 className="card-title text-lg font-semibold text-primary line-clamp-2 group-hover:text-secondary transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3 mt-2">
                    {article.details}
                  </p>

                  <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <FaUser className="text-xs" />
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
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <h3 className="text-xl font-semibold text-gray-600 mb-4">
            No articles found
          </h3>
          <p className="text-gray-500 mb-6">
            There are no articles in this category yet.
          </p>
          <Link to="/" className="btn btn-secondary">
            Browse All News
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Category;
