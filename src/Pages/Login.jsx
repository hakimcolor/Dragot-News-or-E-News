import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-300"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Login to Your Account
        </h2>
        <hr className="mb-6 border-gray-400" />

        <label className="block text-gray-800 mb-2 font-medium">
          Email Address
        </label>
        <div className="flex items-center border rounded-lg mb-4 px-3 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-yellow-500">
          <FaEnvelope className="text-yellow-500 mr-2" />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full outline-none text-gray-900 bg-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <label className="block text-gray-800 mb-2 font-medium">Password</label>
        <div className="flex items-center border rounded-lg mb-6 px-3 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-red-500">
          <FaLock className="text-red-500 mr-2" />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full outline-none text-gray-900 bg-transparent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-gray-800 to-gray-600 text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300 cursor-pointer"
        >
          Login
        </button>

        <div className="flex justify-between items-center mt-4 text-sm text-gray-700">
          <a href="#" className="hover:text-yellow-600 hover:underline">
            Forgot Password?
          </a>
          <NavLink
            to="singup"
            className="hover:text-red-600 hover:underline font-medium"
          >
            Don’t have an account?{' '}
            <span className="font-semibold">Register</span>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
