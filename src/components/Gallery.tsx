'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const galleryImages = [
    { id: 1, title: 'Smart Classroom', category: 'academics' },
    { id: 2, title: 'Sports Arena', category: 'sports' },
    { id: 3, title: 'Science Lab', category: 'academics' },
    { id: 4, title: 'Annual Day', category: 'events' },
    { id: 5, title: 'Library', category: 'facilities' },
    { id: 6, title: 'Cafeteria', category: 'facilities' },
    { id: 7, title: 'Students', category: 'events' },
    { id: 8, title: 'Campus', category: 'campus' },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative h-64 rounded-xl overflow-hidden cursor-pointer group ${
                index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Background Gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600"
                style={{
                  backgroundImage: `linear-gradient(135deg,
                    ${['#667eea', '#f093fb', '#4facfe', '#43e97b', '#fa709a', '#fee140', '#f5576c', '#a8edea'][index % 8]} 0%,
                    ${['#764ba2', '#f5576c', '#00f2fe', '#38f9d7', '#fee140', '#ff8fab', '#fed766', '#fed330'][index % 8]} 100%)`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 z-10">
                <motion.div
                  animate={{
                    scale: hoveredId === image.id ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ZoomIn className="text-white" size={40} />
                </motion.div>
                <h3 className="text-white font-bold text-xl text-center px-4">
                  {image.title}
                </h3>
                <span className="text-blue-200 text-sm capitalize">
                  {image.category}
                </span>
              </div>

              {/* Hover Border */}
              <motion.div
                animate={{
                  opacity: hoveredId === image.id ? 1 : 0,
                }}
                className="absolute inset-0 border-2 border-white pointer-events-none rounded-xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
