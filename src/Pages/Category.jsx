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
    const load = async () => {
      try {
        const [nr, cr] = await Promise.all([
          fetch('/news.json'),
          fetch('/categories.json'),
        ]);
        const newsData = await nr.json();
        const catData = await cr.json();
        const catId = parseInt(categoryId);
        setCurrentCategory(catData.find((c) => c.id === catId));
        setNews(
          catId === 0
            ? newsData
            : newsData.filter((i) => i.category_id === catId)
        );
        setCategories(catData);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [categoryId]);

  const fmt = (d) =>
    new Date(d).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="loading loading-spinner loading-lg text-secondary"></div>
      </div>
    );

  return (
    <div className="space-y-6">
      {/* Back */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-secondary hover:text-red-700 font-medium text-sm transition-colors"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold text-primary border-l-4 border-secondary pl-3">
          {currentCategory?.name || 'All News'}
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          {news.length} article{news.length !== 1 ? 's' : ''} found
        </p>
      </motion.div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                parseInt(categoryId) === cat.id
                  ? 'bg-secondary text-white border-secondary'
                  : 'text-gray-600 border-gray-300 hover:border-secondary hover:text-secondary'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Grid */}
      {news.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {news.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <Link
                to={`/news/${a.id}`}
                className="article-card block bg-white rounded-lg overflow-hidden shadow-sm group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={a.thumbnail_url}
                    alt={a.title}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {a.others?.is_today_pick && (
                    <div className="absolute top-2 left-2">
                      <span className="category-pill text-xs">Pick</span>
                    </div>
                  )}
                  {a.others?.is_trending && (
                    <div className="absolute top-2 right-2">
                      <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                        Hot
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-sm text-primary line-clamp-2 group-hover:text-secondary transition-colors mb-2">
                    {a.title}
                  </h3>
                  <p className="text-gray-500 text-xs line-clamp-2 mb-3">
                    {a.details}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <FaUser className="text-xs" />
                      {a.author.name}
                    </div>
                    <div className="flex items-center gap-2">
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
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <FaCalendarAlt />
                      {fmt(a.author.published_date)}
                    </span>
                    <span className="text-secondary text-xs font-medium group-hover:underline">
                      Read →
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
          className="text-center py-16"
        >
          <p className="text-4xl mb-4">📭</p>
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            No articles found
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Nothing in this category yet.
          </p>
          <Link to="/" className="btn btn-secondary btn-sm">
            Browse All News
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Category;
