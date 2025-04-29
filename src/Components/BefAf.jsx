import React from "react";
import { motion } from "framer-motion";

// Ganti dengan path video & gambar yang sesuai
import Before1 from "../assets/keran1.jpeg";
import After1 from "../assets/keran2.jpeg";
import Before2 from "../assets/handler1.jpeg";
import After2 from "../assets/handler2.jpeg";

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const BefAf = () => {
  return (
    <section id="testi">

    <div className="w-full py-16 bg-gray-900 text-white text-center">
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <motion.h2 
          className="text-4xl font-bold text-yellow-400 mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          BEFORE & AFTER
        </motion.h2>

        {/* Gambar Before & After */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Before-After Pair 1 */}
          <motion.div 
            className="relative group"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src={Before1} alt="Before" className="w-full rounded-lg group-hover:opacity-50 transition" />
            <span className="absolute top-2 left-2 bg-red-500 text-white px-4 py-1 rounded-full text-sm">
              BEFORE
            </span>
          </motion.div>
          
          <motion.div 
            className="relative group"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src={After1} alt="After" className="w-full rounded-lg group-hover:opacity-50 transition" />
            <span className="absolute top-2 left-2 bg-green-500 text-white px-4 py-1 rounded-full text-sm">
              AFTER
            </span>
          </motion.div>

          {/* Before-After Pair 2 */}
          <motion.div 
            className="relative group"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >
            <img src={Before2} alt="Before" className="w-full rounded-lg group-hover:opacity-50 transition" />
            <span className="absolute top-2 left-2 bg-red-500 text-white px-4 py-1 rounded-full text-sm">
              BEFORE
            </span>
          </motion.div>
          
          <motion.div 
            className="relative group"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >
            <img src={After2} alt="After" className="w-full rounded-lg group-hover:opacity-50 transition" />
            <span className="absolute top-2 left-2 bg-green-500 text-white px-4 py-1 rounded-full text-sm">
              AFTER
            </span>
          </motion.div>

        </div>

      </div>
    </div>
  </section>
  );
};

export default BefAf;
