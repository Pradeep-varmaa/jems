// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// // import { Facebook, Share2, Instagram, Briefcase, Heart } from 'lucide-react';

// export default function Footer() {
//   const quickLinks = ['Home', 'About', 'Academics', 'Admissions', 'Gallery', 'Faculty', 'Events', 'Contact'];
//   const socialLinks = [
//     { icon: Facebook, label: 'Facebook' },
//     { icon: Share2, label: 'Twitter' },
//     { icon: Instagram, label: 'Instagram' },
//     { icon: Briefcase, label: 'LinkedIn' },
//   ];

//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         {/* Top Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-gray-700"
//         >
//           {/* Logo & Description */}
//           <div>
//             <h3 className="text-2xl font-bold text-white mb-4">Excellence Academy</h3>
//             <p className="text-gray-400 leading-relaxed">
//               Building tomorrow's leaders through quality education, innovation, and character
//               development.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
//             <motion.ul className="space-y-3">
//               {quickLinks.map((link, index) => (
//                 <motion.li
//                   key={index}
//                   whileHover={{ x: 4 }}
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   <a href={`#${link.toLowerCase()}`}>{link}</a>
//                 </motion.li>
//               ))}
//             </motion.ul>
//           </div>

//           {/* Social Media */}
//           <div>
//             <h4 className="text-lg font-bold text-white mb-6">Follow Us</h4>
//             <div className="flex gap-4 mb-6">
//               {socialLinks.map((social, index) => {
//                 const Icon = social.icon;
//                 return (
//                   <motion.button
//                     key={index}
//                     whileHover={{ scale: 1.2, y: -4 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
//                     aria-label={social.label}
//                   >
//                     <Icon size={20} />
//                   </motion.button>
//                 );
//               })}
//             </div>

//             {/* Newsletter */}
//             <div>
//               <h5 className="font-semibold text-white mb-3">Newsletter</h5>
//               <div className="flex gap-2">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="flex-1 px-3 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
//                 >
//                   →
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Bottom Section */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-gray-400 text-sm"
//         >
//           <p className="flex items-center gap-2 justify-center md:justify-start">
//             © 2024 Excellence Academy. All rights reserved. Made with
//             <motion.span
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
//             >
//               <Heart size={16} className="text-red-500 fill-red-500" />
//             </motion.span>
//           </p>
//           <div className="flex gap-8 justify-center md:justify-end mt-4 md:mt-0">
//             <a href="#" className="hover:text-white transition-colors">
//               Privacy Policy
//             </a>
//             <a href="#" className="hover:text-white transition-colors">
//               Terms of Service
//             </a>
//             <a href="#" className="hover:text-white transition-colors">
//               Sitemap
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// }
