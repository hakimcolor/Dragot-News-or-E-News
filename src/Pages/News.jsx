import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaEye,
  FaStar,
  FaCalendarAlt,
  FaArrowLeft,
  FaBookmark,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaClock,
  FaPrint,
} from 'react-icons/fa';

const News = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await (await fetch('/news.json')).json();
        const current = data.find((i) => i.id === id);
        setNews(current);
        setRelated(
          data
            .filter(
              (i) => i.id !== id && i.category_id === current?.category_id
            )
            .slice(0, 4)
        );
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    if (id) load();
  }, [id]);

  const fmt = (d) =>
    new Date(d).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  if (loading)
    return (
      <div className="py-6">
        <div className="bg-white rounded-xl p-6 shadow-sm max-w-3xl">
          <div className="skeleton h-48 w-full rounded-lg mb-4"></div>
          <div className="skeleton h-6 w-3/4 mb-3"></div>
          <div className="skeleton h-4 w-1/2 mb-5"></div>
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="skeleton h-3 w-full"></div>
            ))}
          </div>
        </div>
      </div>
    );

  if (!news)
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-5xl mb-4">📰</p>
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-3">
          Article Not Found
        </h2>
        <p className="text-gray-500 mb-6 text-sm">
          This article doesn't exist or has been removed.
        </p>
        <Link
          to="/"
          className="bg-secondary hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-semibold transition-colors text-sm"
        >
          <FaArrowLeft className="inline mr-2" />
          Back to Home
        </Link>
      </div>
    );

  return (
    <div className="space-y-4">
      {/* Back */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-secondary hover:text-red-700 font-medium text-sm transition-colors"
        >
          <FaArrowLeft />
          Back to Home
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Article */}
        <div className="lg:col-span-2">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="relative">
              <img
                src={news.image_url}
                alt={news.title}
                className="w-full h-56 lg:h-72 object-cover"
              />
              <div className="absolute top-3 left-3">
                <span
                  className={`category-pill ${news.rating.badge === 'excellent' ? 'bg-green-500' : news.rating.badge === 'trending' ? 'bg-orange-500' : 'bg-blue-500'}`}
                >
                  {news.rating.badge}
                </span>
              </div>
              <div className="absolute bottom-3 right-3 flex gap-2">
                <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow transition-all">
                  <FaBookmark className="text-gray-700 text-sm" />
                </button>
                <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow transition-all">
                  <FaPrint className="text-gray-700 text-sm" />
                </button>
              </div>
            </div>

            <div className="p-5 lg:p-7">
              <h1 className="text-headline text-2xl lg:text-3xl mb-4 leading-tight">
                {news.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-5 pb-5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <img
                    src={news.author.img}
                    alt={news.author.name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm text-gray-900">
                      {news.author.name}
                    </p>
                    <p className="byline-text text-xs">Staff Reporter</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <FaCalendarAlt className="text-xs" />
                  {fmt(news.author.published_date)}
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <FaEye className="text-xs" />
                  {news.total_view.toLocaleString()} views
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <FaStar className="text-yellow-500 text-xs" />
                  {news.rating.number}/5
                </span>
              </div>

              <p className="text-body text-gray-700 leading-relaxed text-base">
                {news.details}
              </p>

              {/* Tags */}
              {news.tags?.length > 0 && (
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 mb-2">
                    Tags:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {news.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full text-xs hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share */}
              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="text-sm font-semibold mb-3">Share this article</p>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs transition-colors">
                    <FaFacebookF />
                    Facebook
                  </button>
                  <button className="flex items-center gap-1.5 bg-sky-400 hover:bg-sky-500 text-white px-3 py-1.5 rounded-lg text-xs transition-colors">
                    <FaTwitter />
                    Twitter
                  </button>
                  <button className="flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white px-3 py-1.5 rounded-lg text-xs transition-colors">
                    <FaLinkedinIn />
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {related.length > 0 && (
            <motion.section
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-4 shadow-sm"
            >
              <h2 className="text-subheadline text-base font-serif mb-4 border-b border-gray-100 pb-2">
                Related Articles
              </h2>
              <div className="space-y-4">
                {related.map((a, i) => (
                  <motion.div
                    key={a.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link to={`/news/${a.id}`} className="flex gap-3 group">
                      <img
                        src={a.thumbnail_url}
                        alt={a.title}
                        className="w-16 h-16 object-cover rounded-lg shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-xs line-clamp-2 group-hover:text-secondary transition-colors mb-1">
                          {a.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
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
          )}

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-linear-to-br from-secondary to-red-600 text-white rounded-xl p-4"
          >
            <h3 className="text-base font-serif mb-2">📧 Stay Updated</h3>
            <p className="text-xs opacity-90 mb-3">Never miss breaking news.</p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-lg text-gray-800 text-sm focus:outline-none"
              />
              <button className="w-full bg-white text-secondary px-3 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                Subscribe Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default News;
