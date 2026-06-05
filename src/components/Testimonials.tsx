'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Parent',
      content:
        'Excellent Academy has transformed my daughter\'s academic journey. The faculty is very supportive and the facilities are world-class.',
      rating: 5,
      avatar: '👩',
    },
    {
      id: 2,
      name: 'Arjun Patel',
      role: 'Student',
      content:
        'The teachers make learning fun and engaging. I love the smart classrooms and the way they use technology in teaching.',
      rating: 5,
      avatar: '👨',
    },
    {
      id: 3,
      name: 'Neha Gupta',
      role: 'Parent',
      content:
        'My son has grown into a confident and well-rounded individual. The school emphasizes both academics and extracurricular activities.',
      rating: 5,
      avatar: '👩',
    },
    {
      id: 4,
      name: 'Rohan Singh',
      role: 'Student',
      content:
        'Excellence Academy prepared me well for competitive exams. The guidance and mentorship from teachers were invaluable.',
      rating: 5,
      avatar: '👨',
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
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What People Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 line-clamp-4">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
