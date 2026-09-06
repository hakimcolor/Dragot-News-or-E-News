import { useState } from 'react';
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGithub,
  FaNewspaper,
} from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';

const Singup = () => {
  const [name, setName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 py-8">
      <div className="w-full max-w-sm">
        {/* Brand */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
            <FaNewspaper className="text-white text-xl" />
          </div>
          <h1 className="text-2xl font-serif font-bold text-gray-900">
            Dragon News
          </h1>
          <p className="text-xs text-gray-500 mt-1">Create your free account</p>
        </div>

        <form
          onSubmit={handleSignup}
          className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100"
        >
          <h2 className="text-lg font-bold text-gray-800 mb-5">Get started</h2>

          {[
            {
              label: 'Full Name',
              icon: FaUser,
              type: 'text',
              val: name,
              set: setName,
              ph: 'John Doe',
              req: true,
            },
            {
              label: 'Profile Image URL',
              icon: FaUser,
              type: 'text',
              val: imgUrl,
              set: setImgUrl,
              ph: 'https://...',
              req: false,
            },
            {
              label: 'Email Address',
              icon: FaEnvelope,
              type: 'email',
              val: email,
              set: setEmail,
              ph: 'you@example.com',
              req: true,
            },
            {
              label: 'Password',
              icon: FaLock,
              type: 'password',
              val: password,
              set: setPassword,
              ph: 'Create a password',
              req: true,
            },
          ].map(({ label, icon: Icon, type, val, set, ph, req }) => (
            <div key={label}>
              <label className="block text-gray-700 text-sm mb-1 font-medium">
                {label}
              </label>
              <div className="flex items-center border border-gray-200 rounded-lg mb-4 px-3 py-2.5 transition-all focus-within:ring-2 focus-within:ring-secondary/40 focus-within:border-secondary">
                <Icon className="text-gray-400 mr-2 text-sm shrink-0" />
                <input
                  type={type}
                  placeholder={ph}
                  required={req}
                  className="w-full outline-none text-gray-900 text-sm bg-transparent"
                  value={val}
                  onChange={(e) => set(e.target.value)}
                />
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-secondary hover:bg-red-700 text-white text-sm font-semibold shadow transition-all mb-4 cursor-pointer"
          >
            Create Account
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400">or continue with</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <div className="flex gap-3 mb-4">
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 text-xs hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <FcGoogle /> Google
            </button>
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 text-xs hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <FaGithub className="text-gray-800" /> GitHub
            </button>
          </div>

          <p className="text-center text-xs text-gray-500">
            Already have an account?{' '}
            <NavLink
              to="/login"
              className="text-secondary hover:underline font-semibold"
            >
              Sign In
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Singup;
