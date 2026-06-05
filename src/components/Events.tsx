'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Bell, Clock } from 'lucide-react';

export default function Events() {
  const events = [
    {
      id: 1,
      title: 'Annual Sports Day',
      date: 'June 15, 2024',
      type: 'Sports',
      description: 'Inter-class competitions in athletics, cricket, and volleyball',
      icon: Calendar,
    },
    {
      id: 2,
      title: 'Parent-Teacher Meeting',
      date: 'June 20, 2024',
      type: 'Academic',
      description: 'Discuss student progress and performance with parents',
      icon: Clock,
    },
    {
      id: 3,
      title: 'Summer Camp Registration',
      date: 'June 25, 2024',
      type: 'Announcement',
      description: 'Register now for exciting summer camps and workshops',
      icon: Bell,
    },
    {
      id: 4,
      title: 'Final Exams',
      date: 'June 1-30, 2024',
      type: 'Academic',
      description: 'Final examinations for all classes',
      icon: Calendar,
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Events & Announcements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {events.map((event) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.id}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-600 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800">
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {event.title}
                      </h3>
                      <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                        {event.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{event.description}</p>
                    <p className="text-sm text-blue-600 font-semibold">
                      📅 {event.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
