'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  GraduationCap,
  School,
} from 'lucide-react';

const academics = [
  {
    title: 'Primary Education',
    icon: School,
    classes: 'Classes I - V',
    description:
      'Strong foundation in language, mathematics, science, and personality development.',
  },
  {
    title: 'Middle School',
    icon: BookOpen,
    classes: 'Classes VI - VIII',
    description:
      'Concept-based learning with focus on academics, sports, and co-curricular activities.',
  },
  {
    title: 'High School',
    icon: GraduationCap,
    classes: 'Classes IX - X',
    description:
      'SSC-focused curriculum with experienced faculty and excellent academic guidance.',
  },
];

export default function Academics() {
  return (
    <section
      id="academics"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Academics
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3">
            Academic Excellence
          </h2>

          <p className="max-w-3xl mx-auto text-slate-600 mt-5">
            We provide quality education through
            innovative teaching methods, experienced
            faculty, and a student-centered learning
            environment.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {academics.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  y: -10,
                }}
                className="
                  bg-slate-50
                  p-8
                  rounded-3xl
                  shadow-md
                  hover:shadow-xl
                  transition-all
                "
              >
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-blue-100
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                >
                  <Icon
                    size={32}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>

                <p className="text-blue-600 font-medium mb-4">
                  {item.classes}
                </p>

                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Highlights */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          {[
            'Smart Classrooms',
            'Digital Learning',
            'Science Labs',
            'English Communication',
          ].map((feature) => (
            <div
              key={feature}
              className="
                bg-blue-600
                text-white
                text-center
                py-5
                rounded-2xl
                font-semibold
                shadow-md
              "
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}