'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Users } from 'lucide-react';

const campuses = [
  {
    id: 1,
    name: 'Seetharampuram Campus',
    image: '/campus1.jpg',
    location: 'Seetharampuram, West Godavari',
    students: '800+',
    phone: '+91 9876543210',
  },
  {
    id: 2,
    name: 'Narasapuram Campus',
    image: '/campus2.jpg',
    location: 'Narasapuram, West Godavari',
    students: '700+',
    phone: '+91 9876543211',
  },
  {
    id: 3,
    name: 'Narasapuram Branch II',
    image: '/campus3.jpg',
    location: 'Narasapuram, West Godavari',
    students: '600+',
    phone: '+91 9876543212',
  },
];

export default function Campuses() {
  return (
    <section
      id="campuses"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Our Branches
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3">
            Explore Our Campuses
          </h2>

          <p className="text-slate-600 mt-5 max-w-2xl mx-auto">
            Providing quality education across
            multiple locations with excellent
            infrastructure and experienced faculty.
          </p>
        </motion.div>

        {/* Campus Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campuses.map((campus, index) => (
            <motion.div
              key={campus.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              {/* Campus Image */}
              <div className="overflow-hidden h-60">
                <img
                  src={campus.image}
                  alt={campus.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    hover:scale-110
                    transition-transform
                    duration-700
                  "
                />
              </div>

              {/* Campus Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {campus.name}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-600">
                    <MapPin
                      size={18}
                      className="text-blue-600"
                    />
                    <span>
                      {campus.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600">
                    <Users
                      size={18}
                      className="text-blue-600"
                    />
                    <span>
                      {campus.students} Students
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600">
                    <Phone
                      size={18}
                      className="text-blue-600"
                    />
                    <span>
                      {campus.phone}
                    </span>
                  </div>
                </div>

                <button
                  className="
                    mt-6
                    w-full
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    py-3
                    rounded-xl
                    font-semibold
                    transition-all
                    cursor-pointer
                  "
                >
                  View Campus
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}