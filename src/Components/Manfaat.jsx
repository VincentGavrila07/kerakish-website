import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import BottleImage from "../assets/BotolKerakish.png";

const benefits = [
  "Mencegah kerak sebelum terbentuk - Mengurangi frekuensi pembersihan.",
  "Lapisan perlindungan invisible - Tidak mengubah tampilan permukaan.",
  "Aman untuk berbagai permukaan - Bisa digunakan pada kaca, keramik, stainless steel, dll.",
  "Mudah digunakan - Tidak perlu menggosok keras, cukup semprot, tunggu, dan usap.",
  "Kemasan 250ML - Praktis & efisien untuk penggunaan jangka panjang.",
  "Sudah terdaftar & mendapat izin PIRT - Terjamin keamanannya dan lolos standar pemerintah.",
];

const Manfaat = () => {
  return (
    <section id="manfaat">

    <div className="w-full py-16 bg-black bg-opacity-70 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Kiri - List Keunggulan */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
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
            KEUNGGULAN KERAKISH
          </motion.h2>
          <ul className="space-y-4">
            {benefits.map((text, index) => (
              <motion.li 
                key={index} 
                className="flex items-center gap-3 text-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="text-yellow-400" size={24} />
                {text}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Kanan - Gambar Produk */}
        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={BottleImage} alt="Kerakish Bottle" className="max-w-xs md:max-w-sm" />
        </motion.div>

      </div>
    </div>
    </section>
  );
};

export default Manfaat;
