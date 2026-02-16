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
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaClock,
  FaComment,
  FaPrint,
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
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="skeleton h-64 w-full rounded-xl mb-6"></div>
            <div className="skeleton h-8 w-3/4 mb-4"></div>
            <div className="skeleton h-4 w-1/2 mb-6"></div>
            <div className="space-y-3">
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">
            Article Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/"
            className="bg-secondary hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            <FaArrowLeft className="inline mr-2" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-secondary hover:text-red-700 transition-colors font-medium"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Article */}
          <div className="lg:col-span-2">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              {/* Article Header */}
              <div className="relative">
                <img
                  src={news.image_url}
                  alt={news.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`category-pill ${
                      news.rating.badge === 'excellent'
                        ? 'bg-green-500'
                        : news.rating.badge === 'trending'
                          ? 'bg-orange-500'
                          : 'bg-blue-500'
                    }`}
                  >
                    {news.rating.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <button className="bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full transition-all shadow-lg">
                    <FaBookmark className="text-gray-700" />
                  </button>
                  <button className="bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full transition-all shadow-lg">
                    <FaPrint className="text-gray-700" />
                  </button>
                </div>
              </div>

              <div className="p-8">
                {/* Title */}
                <h1 className="text-headline text-3xl lg:text-4xl mb-6 leading-tight">
                  {news.title}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <img
                      src={news.author.img}
                      alt={news.author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {news.author.name}
                      </p>
                      <p className="byline-text">Staff Reporter</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 text-gray-600">
                    <FaCalendarAlt className="text-sm" />
                    <span className="text-sm">
                      {formatDate(news.author.published_date)}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1 text-gray-600">
                    <FaEye className="text-sm" />
                    <span className="text-sm">
                      {news.total_view.toLocaleString()} views
                    </span>
                  </div>

                  <div className="flex items-center space-x-1 text-gray-600">
                    <FaStar className="text-yellow-500 text-sm" />
                    <span className="text-sm">{news.rating.number}/5</span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-body text-gray-700 leading-relaxed text-lg">
                    {news.details}
                  </p>
                </div>

                {/* Tags */}
                {news.tags && news.tags.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-600 mb-3">
                      Tags:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {news.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">
                    Share this article
                  </h3>
                  <div className="flex space-x-3">
                    <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                      <FaFacebookF />
                      <span>Facebook</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors">
                      <FaTwitter />
                      <span>Twitter</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors">
                      <FaLinkedinIn />
                      <span>LinkedIn</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Related News */}
            {relatedNews.length > 0 && (
              <motion.section
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h2 className="text-subheadline text-xl font-serif mb-6 border-b border-gray-200 pb-2">
                  Related Articles
                </h2>

                <div className="space-y-6">
                  {relatedNews.map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Link to={`/news/${article.id}`} className="block group">
                        <div className="flex space-x-3">
                          <img
                            src={article.thumbnail_url}
                            alt={article.title}
                            className="w-20 h-20 object-cover rounded-lg shrink-0"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-secondary transition-colors mb-2">
                              {article.title}
                            </h3>
                            <div className="flex items-center space-x-3 text-xs text-gray-500">
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
            )}

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-linear-to-br from-secondary to-red-600 text-white rounded-2xl p-6"
            >
              <h3 className="text-xl font-serif mb-3">📧 Stay Updated</h3>
              <p className="text-sm opacity-90 mb-4">
                Never miss breaking news. Subscribe to our newsletter.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full bg-white text-secondary px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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

export default News;
