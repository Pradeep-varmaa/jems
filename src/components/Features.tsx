'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Laptop,
  BookOpen,
  Users,
  Trophy,
  Library,
  Bus,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Laptop,
      title: 'Smart Classrooms',
      description: 'Interactive displays and technology-integrated learning spaces',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BookOpen,
      title: 'Digital Learning',
      description: 'Comprehensive online resources and e-learning platforms',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Experienced Faculty',
      description: 'Qualified teachers with international certifications',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Trophy,
      title: 'Sports Activities',
      description: 'Olympic-size facilities for various sports and athletics',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Library,
      title: 'Modern Library',
      description: '50,000+ books and digital resources for research',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Bus,
      title: 'Transport Facility',
      description: 'Safe and comfortable transportation network',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            World-Class Facilities
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
