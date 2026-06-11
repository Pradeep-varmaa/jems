// 'use client';

// import React, { useState, useEffect } from 'react';
// import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

// interface Stat {
//   label: string;
//   value: number;
//   suffix: string;
// }

// function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.round(latest));

//   useEffect(() => {
//     const animation = animate(count, value, { duration: 2 });
//     return animation.stop;
//   }, [count, value]);

//   return (
//     <motion.span>
//       {rounded}
//       {suffix}
//     </motion.span>
//   );
// }

// export default function Statistics() {
//   const stats: Stat[] = [
//     { label: 'Active Students', value: 3500, suffix: '+' },
//     { label: 'Expert Teachers', value: 250, suffix: '+' },
//     { label: 'Courses Offered', value: 150, suffix: '+' },
//     { label: 'Awards Won', value: 85, suffix: '+' },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5 },
//     },
//   };

//   return (
//     <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Excellence in Numbers
//           </h2>
//           <div className="w-20 h-1 bg-white/30 mx-auto"></div>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all"
//             >
//               <motion.div className="text-5xl md:text-6xl font-bold mb-4">
//                 <AnimatedCounter value={stat.value} suffix={stat.suffix} />
//               </motion.div>
//               <p className="text-lg text-blue-100">{stat.label}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
