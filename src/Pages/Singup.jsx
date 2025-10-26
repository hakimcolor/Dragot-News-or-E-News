import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Singup = () => {
  const [name, setName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    alert(
      `Name: ${name}\nProfile Image URL: ${imgUrl}\nEmail: ${email}\nPassword: ${password}`
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSignup}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Create Your Account
        </h2>
        <hr className="mb-6 border-gray-300" />

        <label className="block text-gray-700 mb-2 font-medium">
          First Name
        </label>
        <div className="flex items-center border rounded-lg mb-4 px-3 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-red-500 focus-within:scale-105">
          <FaUser className="text-red-500 mr-2" />
          <input
            type="text"
            placeholder="Enter your first name"
            className="w-full outline-none text-gray-900 bg-transparent"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <label className="block text-gray-700 mb-2 font-medium">
          Profile Image URL
        </label>
        <div className="flex items-center border rounded-lg mb-4 px-3 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-red-500 focus-within:scale-105">
          <FaUser className="text-red-500 mr-2" />
          <input
            type="text"
            placeholder="Enter image URL"
            className="w-full outline-none text-gray-900 bg-transparent"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </div>

        <label className="block text-gray-700 mb-2 font-medium">
          Email Address
        </label>
        <div className="flex items-center border rounded-lg mb-4 px-3 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-yellow-500 focus-within:scale-105">
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

        <label className="block text-gray-700 mb-2 font-medium">Password</label>
        <div className="flex items-center border rounded-lg mb-6 px-3 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:scale-105">
          <FaLock className="text-blue-500 mr-2" />
          <input
            type="password"
            placeholder="Create a password"
            className="w-full outline-none text-gray-900 bg-transparent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300 mb-4 cursor-pointer"
        >
          Sign Up
        </button>

        <p className="text-center text-gray-500 mb-4">Or continue with</p>
        <div className="flex justify-center gap-4 mb-4">
          <button className="flex items-center gap-2 border rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer">
            <FcGoogle className="" /> Google
          </button>
          <button className="flex items-center gap-2 border rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer">
            <FaGithub className="text-gray-800" /> GitHub
          </button>
        </div>

        <div className="text-center text-gray-700">
          Already have an account?{' '}
          <NavLink
            to="/login"
            className="text-blue-600 hover:underline font-semibold"
          >
            Login
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Singup;
