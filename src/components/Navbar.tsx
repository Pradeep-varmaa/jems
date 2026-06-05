'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Academics', 'Admissions', 'Gallery', 'Faculty', 'Events', 'Contact'];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
    },
    open: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
          >
            Excellence Academy
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ color: '#2563eb', y: -2 }}
                className="text-gray-700 font-medium transition-colors hover:text-blue-600"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-shadow"
          >
            Apply Now
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? (
              <X className="text-gray-700" size={28} />
            ) : (
              <Menu className="text-gray-700" size={28} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </motion.a>
            ))}
            <motion.button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full font-semibold">
              Apply Now
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
