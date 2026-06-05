'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Heart } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Excellence Academy
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {/* Mission */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600"
          >
            <Target className="text-blue-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To provide world-class education that develops critical thinking, creativity, and
              character in every student, preparing them for global excellence.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-600"
          >
            <Award className="text-green-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be a beacon of educational excellence, fostering innovation, integrity, and
              inclusivity in a dynamic learning environment that empowers leaders of tomorrow.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-600"
          >
            <Heart className="text-purple-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-600">
              Excellence, integrity, compassion, respect, and innovation guide our commitment to
              nurturing well-rounded individuals who contribute positively to society.
            </p>
          </motion.div>
        </motion.div>

        {/* Principal Message */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 rounded-2xl"
        >
          <h3 className="text-3xl font-bold mb-6">Principal's Message</h3>
          <p className="text-lg leading-relaxed mb-6">
            Welcome to Excellence Academy, where we believe every child has the potential to achieve
            greatness. Our mission is to provide a nurturing environment that encourages academic
            excellence, character development, and holistic growth.
          </p>
          <p className="text-lg leading-relaxed">
            With a dedicated faculty, modern infrastructure, and a commitment to innovation in
            education, we ensure that every student develops the skills and values necessary to
            succeed in an ever-changing world. We look forward to partnering with you in your
            child's educational journey.
          </p>
          <p className="mt-6 font-semibold text-blue-100">- Dr. Ramesh Kumar, Principal</p>
        </motion.div>
      </div>
    </section>
  );
}
