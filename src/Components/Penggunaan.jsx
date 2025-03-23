import React from "react";
import { motion } from "framer-motion";
import UsageImage from "../assets/Hero2.jpg"; // Ganti dengan gambar yang sesuai

const steps = [
  "Semprotkan Kerakish ke permukaan yang bersih dan kering.",
  "Tunggu beberapa saat agar formula bekerja optimal.",
  "Usap dengan kain microfiber hingga merata dan kering.",
];

const disclaimers = [
  "KERAKISH BUKAN PRODUK UNTUK MEMBERSIHKAN KERAK YANG SUDAH MENUMPUK LAMA.",
  "Produk ini diformulasikan sebagai ANTI KERAK untuk MENCEGAH KERAK SEBELUM TERBENTUK, bukan untuk menghilangkan kerak yang sudah lama.",
  "TIDAK ABRASIF, ARTINYA TIDAK BERBAU MENYENGAT DAN TIDAK MERUSAK PERMUKAAN, sehingga aman digunakan di berbagai material tanpa risiko pengikisan atau kerusakan.",
];

const Penggunaan = () => {
  return (
    <div className="w-full py-16 bg-black bg-opacity-70 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Kiri - Gambar Penggunaan */}
        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={UsageImage} alt="Cara Penggunaan Kerakish" className="max-w-xs md:max-w-sm shadow-lg" />
        </motion.div>

        {/* Kanan - Langkah-langkah */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold text-yellow-400 mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            CARA PENGGUNAAN
          </motion.h2>
          <ul className="space-y-4">
            {steps.map((text, index) => (
              <motion.li 
                key={index} 
                className="flex items-start gap-4 text-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="bg-yellow-400 text-gray-900 font-bold w-10 h-10 flex items-center justify-center rounded-full text-xl">
                  {index + 1}
                </span>
                {text}
              </motion.li>
            ))}
          </ul>

          {/* DISCLAIMER */}
          <motion.div 
            className="mt-10 p-6 bg-gray-700 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-red-400 mb-4">DISCLAIMER</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {disclaimers.map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">⚠</span>
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Penggunaan;
