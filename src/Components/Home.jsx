import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import DemoVideo from "../assets/demokerakish.mp4";

const images = [hero1, hero2, hero3];

const hero = () => {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk modal

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Ganti gambar setiap 5 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home">

        <div className="relative w-full h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
        {/* Gambar dengan Animasi */}
        <AnimatePresence>
            <motion.img
            key={index}
            src={images[index]}
            alt="hero Image"
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
            />
        </AnimatePresence>

        {/* Overlay & Text */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-center px-6">
            <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">
                Gateway to <span className="text-yellow-400">Dream Homes</span>
            </h1>
            <p className="mt-4 text-lg">Effortlessly remove stubborn scale and provide protection to prevent future buildup.</p>
            <div className="mt-6 flex justify-center gap-4">
                <a href="#about" className="bg-yellow-500 px-6 py-3 rounded text-lg font-semibold hover:bg-yellow-600 transition cursor-pointer">
                Discover Now
                </a>
                <button
                className="flex items-center gap-2 border px-6 py-3 rounded text-lg font-semibold hover:bg-white hover:text-black transition"
                onClick={() => setIsModalOpen(true)} // Buka modal saat tombol diklik
                >
                ⏯ Watch Demo
                </button>
            </div>
            </div>
        </div>

            {/* Modal Video */}
        <AnimatePresence>
        {isModalOpen && (
            <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
                // Pastikan hanya klik di luar modal yang menutupnya
                if (e.target.id === "modalOverlay") {
                setIsModalOpen(false);
                }
            }}
            >
            <motion.div
                id="modalContent" // ID ini membantu mencegah modal tertutup saat diklik
                className="relative bg-black p-4 rounded-lg shadow-lg w-[90%] max-w-[400px] md:max-w-[300px]"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
            >
                {/* Tombol Close */}
                <button
                className="absolute top-2 right-2 text-white text-2xl z-50"
                onClick={() => setIsModalOpen(false)}
                >
                ❌
                </button>

                {/* Video */}
                <div className="w-full h-auto">
                <video className="w-full h-auto rounded-lg" controls autoPlay>
                    <source src={DemoVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
            </motion.div>
            </motion.div>
        )}
        </AnimatePresence>



        </div>
    </section>
  );
};

export default hero;
