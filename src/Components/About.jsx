import React from 'react'
import { motion } from "framer-motion";
import FotoKerakish from "../assets/produkkerakish.png";

const About = () => {
  return (
    <section id="about">
    <div className="relative flex min-h-screen flex-col md:flex-row ">
        <div className="relative w-full md:w-1/2">
          <img src={FotoKerakish} alt="Studying Session" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 bg-black bg-opacity-70 flex items-center justify-center text-white p-12">
        
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false }}
            className="max-w-lg"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              ABOUT <span className="text-yellow-400">KERAKISH</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed">
            Kerakish adalah produk inovatif yang dirancang untuk
            MENCEGAH KERAK SEBELUM TERBENTUR, menjaga permukaan tetap bersih lebi lama tanpa harus sering membersihkannya. Formula khususnya menciptakan lapisan pelindung yang menghambat penumpukan kerak akibat air, sabun, atau mineral lainnya.

            </p>
            <a 
              href ="https://wa.me/628117996868"
              className="inline-block mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-all"
            >
              Buy Now
            </a>
          </motion.div>
        </div>
      </div>
    
    
    </section>
  )
}

export default About