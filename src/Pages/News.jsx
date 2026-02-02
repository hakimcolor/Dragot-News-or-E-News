import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaEye,
  FaStar,
  FaCalendarAlt,
  FaUser,
  FaArrowLeft,
  FaShare,
  FaBookmark,
} from 'react-icons/fa';

const News = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await fetch('/news.json');
        const newsData = await response.json();

        const currentNews = newsData.find((item) => item.id === id);
        const related = newsData
          .filter(
            (item) =>
              item.id !== id && item.category_id === currentNews?.category_id
          )
          .slice(0, 4);

        setNews(currentNews);
        setRelatedNews(related);
        setLoading(false);
      } catch (error) {
        console.error('Error loading news:', error);
        setLoading(false);
      }
    };

    if (id) {
      loadNews();
    }
  }, [id]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="loading loading-spinner loading-lg text-secondary"></div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-primary mb-4">News Not Found</h2>
        <Link to="/" className="btn btn-secondary">
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
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

      {/* Main Article */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
      >
        {/* Article Header */}
        <div className="relative">
          <img
            src={news.image_url}
            alt={news.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute top-4 right-4">
            <span
              className={`badge ${
                news.rating.badge === 'excellent'
                  ? 'badge-success'
                  : news.rating.badge === 'trending'
                    ? 'badge-secondary'
                    : 'badge-primary'
              } text-white font-semibold`}
            >
              {news.rating.badge}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
            {news.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600 border-b pb-4">
            <div className="flex items-center gap-2">
              <img
                src={news.author.img}
                alt={news.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-1">
                  <FaUser className="text-xs" />
                  <span className="font-medium">{news.author.name}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <FaCalendarAlt className="text-xs" />
              <span>{formatDate(news.author.published_date)}</span>
            </div>

            <div className="flex items-center gap-1">
              <FaEye className="text-xs" />
              <span>{news.total_view.toLocaleString()} views</span>
            </div>

            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500 text-xs" />
              <span>{news.rating.number}/5</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            <button className="btn btn-sm btn-outline btn-secondary">
              <FaShare className="mr-1" /> Share
            </button>
            <button className="btn btn-sm btn-outline btn-accent">
              <FaBookmark className="mr-1" /> Save
            </button>
          </div>

          {/* Article Content */}
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              {news.details}
            </p>
          </div>

          {/* Tags */}
          {news.tags && news.tags.length > 0 && (
            <div className="mt-6 pt-4 border-t">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">
                Tags:
              </h3>
              <div className="flex flex-wrap gap-2">
                {news.tags.map((tag, index) => (
                  <span key={index} className="badge badge-outline badge-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.article>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">
            Related News
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedNews.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/news/${article.id}`}
                  className="card bg-white shadow hover:shadow-lg transition-all duration-300 group cursor-pointer block"
                >
                  <figure className="relative overflow-hidden">
                    <img
                      src={article.thumbnail_url}
                      alt={article.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </figure>

                  <div className="card-body p-4">
                    <h3 className="card-title text-base font-semibold text-primary line-clamp-2 group-hover:text-secondary transition-colors">
                      {article.title}
                    </h3>

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
        </motion.section>
      )}
    </div>
  );
};

export default News;
