'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );
  }, []);

  const navItems = [
    'Home',
    'About',
    'Campuses',
    'Academics',
    // 'Facilities',
    'Gallery',
    // 'Admissions',
    'Testimonials',
    'Contact',
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      {/* <div className="bg-blue-700 text-white text-center py-2 text-sm font-medium">
        🎓 Admissions Open for Academic Year 2026-27
      </div> */}

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-3 left-0 right-0 z-50 transition-all duration-300 rounded-lg mx-5 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg'
            : 'bg-white/90 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="School Logo"
                className="h-14 w-auto object-contain"
              />

              <div className="hidden sm:block">
                <h1 className="font-bold text-lg lg:text-xl text-blue-700">
                  Janaki English Medium High School
                </h1>

                <p className="text-xs text-gray-500">
                  Seetharampuram • Narasapuram
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ y: -2 }}
                  className="
                    relative
                    text-gray-700
                    font-medium
                    transition-colors
                    hover:text-blue-600

                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:w-0
                    after:bg-blue-600
                    after:transition-all
                    hover:after:w-full
                  "
                >
                  {item}
                </motion.a>
              ))}

              {/* CTA Button */}
              {/* <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  bg-yellow-500
                  hover:bg-yellow-600
                  text-white
                  px-6
                  py-3
                  rounded-full
                  font-semibold
                  shadow-md
                  transition-all
                "
              >
                Admissions Open
              </motion.button> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              aria-label="Open navigation menu"
              className="lg:hidden"
              onClick={() =>
                setIsOpen(!isOpen)
              }
            >
              {isOpen ? (
                <X
                  size={28}
                  className="text-gray-700"
                />
              ) : (
                <Menu
                  size={28}
                  className="text-gray-700"
                />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: 'auto',
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="lg:hidden overflow-hidden"
              >
                <div className="py-4 space-y-2 border-t">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() =>
                        setIsOpen(false)
                      }
                      className="
                        block
                        px-4
                        py-3
                        rounded-lg
                        text-gray-700
                        hover:bg-blue-50
                        hover:text-blue-600
                        transition-colors
                      "
                    >
                      {item}
                    </a>
                  ))}

                  <button
                    className="
                      w-full
                      mt-3
                      bg-yellow-500
                      hover:bg-yellow-600
                      text-white
                      py-3
                      rounded-xl
                      font-semibold
                    "
                  >
                    Admissions Open
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
}