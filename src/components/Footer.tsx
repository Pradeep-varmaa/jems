'use client';

import React from 'react';
import { motion } from 'framer-motion';

import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  LinkedinFilled,
  HeartFilled,
} from '@ant-design/icons';

export default function Footer() {
  const quickLinks = [
    'Home',
    'About',
    'Academics',
    'Admissions',
    'Gallery',
    'Faculty',
    'Events',
    'Contact',
  ];

  const socialLinks = [
    { icon: <FacebookFilled />, label: 'Facebook' },
    { icon: <TwitterSquareFilled />, label: 'Twitter' },
    { icon: <InstagramFilled />, label: 'Instagram' },
    { icon: <LinkedinFilled />, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#0f172a] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-12"
        >

          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Excellence Academy
            </h2>

            <p className="text-gray-400 leading-7">
              Building tomorrow&apos;s leaders through quality education,
              innovation, and character development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social + Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Follow Us
            </h3>

            <div className="flex items-center gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center text-xl text-gray-300 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-medium mb-3">
                Subscribe Newsletter
              </h4>

              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-blue-500"
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all"
                >
                  Send
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-gray-400"
        >

          <p className="flex items-center gap-2 text-center md:text-left">
            © 2025 Excellence Academy. All rights reserved. Made with

            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="text-red-500"
            >
              <HeartFilled />
            </motion.span>
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}