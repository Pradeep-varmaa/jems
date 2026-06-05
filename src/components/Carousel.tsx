'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  color: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: 'Welcome to Excellence Academy',
    subtitle: 'Building Tomorrow\'s Leaders Today',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'from-purple-600 to-indigo-600',
  },
  {
    id: 2,
    title: 'Smart Classrooms',
    subtitle: 'Technology-Enhanced Learning Experience',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: 'from-pink-500 to-red-500',
  },
  {
    id: 3,
    title: 'World-Class Facilities',
    subtitle: 'State-of-the-art Science Labs & Sports Courts',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 4,
    title: 'Sports Excellence',
    subtitle: 'Developing Physical and Mental Strength',
    image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 5,
    title: 'Cultural Celebrations',
    subtitle: 'Annual Day & Festivals',
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    color: 'from-orange-400 to-yellow-300',
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoplay(false);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoplay(false);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setAutoplay(false);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-gray-900"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
              className="absolute inset-0"
            >
              {/* Background Gradient */}
              <div
                className="absolute inset-0"
                style={{ background: slide.image }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-center text-white z-10 px-4"
                >
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-100 mb-8 drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors"
                  >
                    Admissions Open
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handlePrev}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-colors"
      >
        <ChevronLeft size={32} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleNext}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-colors"
      >
        <ChevronRight size={32} />
      </motion.button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8 h-3'
                : 'bg-white/50 w-3 h-3 hover:bg-white/70'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-20 text-white font-semibold text-lg">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}
