import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';

const jobs = [
  {
    id: 1,
    title: 'Senior Reporter — Politics',
    dept: 'Editorial',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    desc: 'Cover national political developments with accuracy and depth. 3+ years experience required.',
    requirements: [
      '3+ years in political journalism',
      'Strong source network',
      'Fluent in Bengali & English',
    ],
  },
  {
    id: 2,
    title: 'Digital Content Editor',
    dept: 'Digital',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    desc: 'Lead our web-first editorial strategy and manage a team of digital writers.',
    requirements: [
      '5+ years editorial experience',
      'SEO and analytics knowledge',
      'CMS proficiency',
    ],
  },
  {
    id: 3,
    title: 'Frontend Developer',
    dept: 'Technology',
    location: 'Remote / Dhaka',
    type: 'Full-time',
    desc: 'Build and maintain our news platform using React and modern web technologies.',
    requirements: [
      'React, TypeScript experience',
      'Understanding of performance optimisation',
      'Collaborative mindset',
    ],
  },
  {
    id: 4,
    title: 'Photojournalist',
    dept: 'Visual',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    desc: 'Capture compelling images that tell stories across Bangladesh and abroad.',
    requirements: [
      'Professional DSLR/mirrorless experience',
      'Portfolio of published work',
      'Willingness to travel',
    ],
  },
];

const perks = [
  {
    emoji: '🏥',
    title: 'Health Insurance',
    desc: 'Full medical, dental and vision coverage.',
  },
  {
    emoji: '📚',
    title: 'Learning Budget',
    desc: '$500/year for courses, books and conferences.',
  },
  {
    emoji: '🏠',
    title: 'Remote Flexibility',
    desc: 'Hybrid working options for most roles.',
  },
  {
    emoji: '✈️',
    title: 'Press Travel',
    desc: 'Travel allowances for field reporting.',
  },
];

const Career = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="space-y-10">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-linear-to-r from-primary to-gray-700 text-white rounded-xl px-8 py-12 text-center"
      >
        <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">
          We're Hiring
        </p>
        <h1 className="text-3xl font-serif font-bold mb-3">Join Dragon News</h1>
        <p className="text-gray-300 text-sm max-w-xl mx-auto leading-relaxed">
          Help us deliver honest, fearless journalism to millions of readers.
          We're looking for talented people who care about the truth.
        </p>
      </motion.div>

      {/* Perks */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-xl font-serif font-bold text-primary mb-4 border-l-4 border-secondary pl-3">
          Why Dragon News?
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {perks.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm p-4 text-center"
            >
              <p className="text-2xl mb-2">{p.emoji}</p>
              <p className="font-semibold text-sm text-gray-900 mb-1">
                {p.title}
              </p>
              <p className="text-xs text-gray-500">{p.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Open roles */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-xl font-serif font-bold text-primary mb-4 border-l-4 border-secondary pl-3">
          Open Positions
        </h2>
        <div className="space-y-3">
          {jobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.07 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === job.id ? null : job.id)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                    <FaBriefcase className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {job.title}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-0.5">
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock />
                        {job.type}
                      </span>
                      <span className="bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">
                        {job.dept}
                      </span>
                    </div>
                  </div>
                </div>
                {open === job.id ? (
                  <FaChevronUp className="text-gray-400 shrink-0" />
                ) : (
                  <FaChevronDown className="text-gray-400 shrink-0" />
                )}
              </button>
              {open === job.id && (
                <div className="px-5 pb-5 border-t border-gray-100">
                  <p className="text-sm text-gray-600 mt-4 mb-3">{job.desc}</p>
                  <p className="text-xs font-semibold text-gray-700 mb-2">
                    Requirements:
                  </p>
                  <ul className="space-y-1 mb-4">
                    {job.requirements.map((r, ri) => (
                      <li
                        key={ri}
                        className="flex items-start gap-2 text-xs text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-1 shrink-0"></span>
                        {r}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:careers@dragonnews.com?subject=Application: ${job.title}`}
                    className="inline-block bg-secondary hover:bg-red-700 text-white px-5 py-2 rounded-full text-xs font-semibold transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-sm p-6 text-center"
      >
        <p className="text-gray-600 text-sm mb-3">
          Don't see the right role? Send us your CV anyway.
        </p>
        <a
          href="mailto:careers@dragonnews.com"
          className="inline-block bg-secondary hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors"
        >
          careers@dragonnews.com
        </a>
      </motion.div>
    </div>
  );
};

export default Career;
