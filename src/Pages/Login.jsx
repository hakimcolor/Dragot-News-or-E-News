import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaNewspaper } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-sm">
        {/* Brand */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
            <FaNewspaper className="text-white text-xl" />
          </div>
          <h1 className="text-2xl font-serif font-bold text-gray-900">
            Dragon News
          </h1>
          <p className="text-xs text-gray-500 mt-1">Sign in to your account</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100"
        >
          <h2 className="text-lg font-bold text-gray-800 mb-5">Welcome back</h2>

          <label className="block text-gray-700 text-sm mb-1 font-medium">
            Email Address
          </label>
          <div className="flex items-center border border-gray-200 rounded-lg mb-4 px-3 py-2.5 transition-all focus-within:ring-2 focus-within:ring-secondary/40 focus-within:border-secondary">
            <FaEnvelope className="text-gray-400 mr-2 text-sm shrink-0" />
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full outline-none text-gray-900 text-sm bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <label className="block text-gray-700 text-sm mb-1 font-medium">
            Password
          </label>
          <div className="flex items-center border border-gray-200 rounded-lg mb-5 px-3 py-2.5 transition-all focus-within:ring-2 focus-within:ring-secondary/40 focus-within:border-secondary">
            <FaLock className="text-gray-400 mr-2 text-sm shrink-0" />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full outline-none text-gray-900 text-sm bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-secondary hover:bg-red-700 text-white text-sm font-semibold shadow transition-all duration-300 cursor-pointer"
          >
            Sign In
          </button>

          <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
            <a href="#" className="hover:text-secondary transition-colors">
              Forgot Password?
            </a>
            <NavLink
              to="singup"
              className="hover:text-secondary font-medium transition-colors"
            >
              Create an account
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
