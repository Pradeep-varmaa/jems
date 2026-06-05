'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

import {
  TeamOutlined,
  UserOutlined,
  BookOutlined,
  TrophyOutlined,
} from '@ant-design/icons';

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
}

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= value) {
        start = value;
        clearInterval(counter);
      }

      setDisplayValue(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  const stats: Stat[] = [
    {
      label: 'Active Students',
      value: 3500,
      suffix: '+',
      icon: <TeamOutlined />,
    },
    {
      label: 'Expert Teachers',
      value: 250,
      suffix: '+',
      icon: <UserOutlined />,
    },
    {
      label: 'Courses Offered',
      value: 150,
      suffix: '+',
      icon: <BookOutlined />,
    },
    {
      label: 'Awards Won',
      value: 85,
      suffix: '+',
      icon: <TrophyOutlined />,
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 30,
    },

    visible: {
      opacity: 1,
      scale: 1,
      y: 0,

      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700">

      {/* Background Blur Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Excellence in Numbers
          </h2>

          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Empowering students with quality education, innovation,
            and achievements across academics and extracurricular activities.
          </p>

          <div className="w-24 h-1 bg-white/40 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center overflow-hidden shadow-2xl hover:border-white/40 transition-all duration-300"
            >

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 to-cyan-300/10"></div>

              {/* Icon */}
              <div className="relative z-10 flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-white/15 text-white text-4xl shadow-lg">
                {stat.icon}
              </div>

              {/* Counter */}
              <motion.div className="relative z-10 text-5xl md:text-6xl font-extrabold text-white mb-4">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </motion.div>

              {/* Label */}
              <p className="relative z-10 text-lg text-blue-100 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}