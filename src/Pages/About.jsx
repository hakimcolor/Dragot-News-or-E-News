import React from 'react';
import { motion } from 'framer-motion';
import {
  FaNewspaper,
  FaUsers,
  FaGlobe,
  FaAward,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import logo from '../assets/logo.png';

const stats = [
  { icon: FaNewspaper, label: 'Articles Published', value: '50,000+' },
  { icon: FaUsers, label: 'Monthly Readers', value: '2M+' },
  { icon: FaGlobe, label: 'Countries Reached', value: '120+' },
  { icon: FaAward, label: 'Press Awards', value: '18' },
];

const team = [
  {
    name: 'Arif Rahman',
    role: 'Editor-in-Chief',
    img: 'https://i.pravatar.cc/80?img=11',
  },
  {
    name: 'Nadia Hossain',
    role: 'Senior Reporter',
    img: 'https://i.pravatar.cc/80?img=47',
  },
  {
    name: 'Karim Uddin',
    role: 'Head of Digital',
    img: 'https://i.pravatar.cc/80?img=33',
  },
  {
    name: 'Sara Begum',
    role: 'Photo Editor',
    img: 'https://i.pravatar.cc/80?img=44',
  },
];

const About = () => (
  <div className="space-y-10">
    {/* Hero */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <div className="bg-linear-to-r from-primary to-gray-700 text-white px-8 py-12 text-center">
        <img
          src={logo}
          alt="Dragon News"
          className="h-14 w-14 mx-auto mb-4 rounded-full border-2 border-white/30"
        />
        <h1 className="text-3xl font-serif font-bold mb-2">
          About Dragon News
        </h1>
        <p className="text-gray-300 text-sm max-w-xl mx-auto leading-relaxed">
          Journalism Without Fear or Favour — delivering truth to millions since
          2020.
        </p>
      </div>
    </motion.div>

    {/* Mission */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6"
    >
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-serif font-bold text-primary mb-3 border-l-4 border-secondary pl-3">
          Our Mission
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Dragon News was founded with a single purpose: to deliver accurate,
          unbiased, and timely news to the people of Bangladesh and beyond. We
          believe an informed public is the cornerstone of democracy, and we
          hold ourselves to the highest standards of ethical journalism.
        </p>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-serif font-bold text-primary mb-3 border-l-4 border-secondary pl-3">
          Our Values
        </h2>
        <ul className="space-y-2 text-sm text-gray-600">
          {[
            'Accuracy over speed — we verify before we publish',
            'Independence from political and commercial influence',
            'Transparency with our audience and sources',
            'Respect for privacy and human dignity',
          ].map((v, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 shrink-0"></span>
              {v}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>

    {/* Stats */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {stats.map(({ icon: Icon, label, value }, i) => (
        <div key={i} className="bg-white rounded-xl shadow-sm p-5 text-center">
          <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon className="text-secondary text-lg" />
          </div>
          <p className="text-2xl font-bold text-primary">{value}</p>
          <p className="text-xs text-gray-500 mt-1">{label}</p>
        </div>
      ))}
    </motion.div>

    {/* Team */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-xl font-serif font-bold text-primary mb-4 border-l-4 border-secondary pl-3">
        Meet the Team
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {team.map((m, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm p-4 text-center"
          >
            <img
              src={m.img}
              alt={m.name}
              className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-secondary/20"
            />
            <p className="font-semibold text-sm text-gray-900">{m.name}</p>
            <p className="text-xs text-gray-500 mt-0.5">{m.role}</p>
          </div>
        ))}
      </div>
    </motion.div>

    {/* Contact */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-xl shadow-sm p-6"
    >
      <h2 className="text-xl font-serif font-bold text-primary mb-4 border-l-4 border-secondary pl-3">
        Get in Touch
      </h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
            <FaEnvelope className="text-secondary text-xs" />
          </div>
          news@dragonnews.com
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
            <FaPhone className="text-secondary text-xs" />
          </div>
          +880 1234 567890
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
            <FaGlobe className="text-secondary text-xs" />
          </div>
          Dhaka, Bangladesh
        </div>
      </div>
    </motion.div>
  </div>
);

export default About;
