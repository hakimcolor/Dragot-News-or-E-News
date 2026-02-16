import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaNewspaper,
  FaArrowUp,
} from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-secondary hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <FaArrowUp />
      </button>

      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Dragon News" className="h-10 w-10" />
              <div>
                <h3 className="text-2xl font-serif font-bold">Dragon News</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Journalism Without Fear
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Your trusted source for breaking news, in-depth analysis, and
              comprehensive coverage of events that shape our world. We deliver
              truth with integrity.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: FaFacebookF, href: '#', color: 'hover:text-blue-500' },
                { icon: FaTwitter, href: '#', color: 'hover:text-blue-400' },
                { icon: FaInstagram, href: '#', color: 'hover:text-pink-500' },
                { icon: FaYoutube, href: '#', color: 'hover:text-red-500' },
                { icon: FaLinkedinIn, href: '#', color: 'hover:text-blue-600' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 hover:bg-gray-700`}
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Breaking News', path: '/category/1' },
                { name: 'Business', path: '/category/2' },
                { name: 'Technology', path: '/category/3' },
                { name: 'Sports', path: '/category/5' },
                { name: 'Entertainment', path: '/category/6' },
                { name: 'About Us', path: '/about' },
                { name: 'Careers', path: '/career' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-secondary transition-colors duration-300 text-sm flex items-center space-x-2"
                  >
                    <FaNewspaper className="text-xs" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              Categories
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Politics', path: '/category/8' },
                { name: 'Health', path: '/category/4' },
                { name: 'Science', path: '/category/7' },
                { name: 'Education', path: '/category/9' },
                { name: 'Lifestyle', path: '/category/10' },
                { name: 'Opinion', path: '/category/0' },
                { name: 'World News', path: '/category/0' },
                { name: 'Local News', path: '/category/0' },
              ].map((category, index) => (
                <li key={index}>
                  <Link
                    to={category.path}
                    className="text-gray-300 hover:text-secondary transition-colors duration-300 text-sm flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    <span>{category.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-secondary mt-1 shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    123 News Street, Press Quarter
                    <br />
                    Dhaka 1000, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FaPhone className="text-secondary shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">+880 1234 567890</p>
                  <p className="text-gray-400 text-xs">24/7 News Hotline</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-secondary shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">news@dragonnews.com</p>
                  <p className="text-gray-400 text-xs">Send us your tips</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold mb-2 text-sm">
                📧 Daily Newsletter
              </h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-700 text-white text-sm rounded-l-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <button className="bg-secondary hover:bg-red-700 px-4 py-2 rounded-r-lg transition-colors text-sm font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Dragon News. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Established 2020 • Trusted by millions worldwide
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-secondary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-secondary transition-colors"
              >
                Terms  Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-secondary transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-secondary transition-colors"
              >
                Editorial Guidelines
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
