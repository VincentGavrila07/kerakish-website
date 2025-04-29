import React from 'react';
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-gray-900 py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Brand Description */}
        <div>
          <img src={logo} alt="Logo Kerakish" className="w-32 h-auto" />
          <p className="mt-2 text-gray-800">
            Effortlessly remove stubborn scale and provide protection to prevent future buildup.
          </p>
        </div>

        {/* Navigation */}
        <div>
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="mt-2 space-y-2 text-gray-800">
                {[
                { label: "About Kerakish", target: "about" },
                { label: "Testimoni", target: "testi" },  // Misalnya about sebagai section Product
                { label: "Contact", target: "contact" }
                ].map((navItem, index) => (
                <li key={index}>
                    <Link 
                    to={navItem.target} 
                    smooth={true} 
                    duration={500} 
                    className="cursor-pointer relative after:block after:w-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
                    >
                    {navItem.label}
                    </Link>
                </li>
                ))}
            </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold">Information</h3>
          <ul className="mt-2 text-gray-800 space-y-2">
            <li>+62 811‑7996‑868</li>
            <li>kerakish.id@gmail.com</li>
          </ul>
        </div>

        {/* Our Media */}
        <div>
          <h3 className="text-lg font-semibold">Our Media</h3>
          <ul className="mt-2 text-gray-800 space-y-2">
            {[
             { href: "https://wa.me/628117996868", icon: "fab fa-whatsapp", label: "WhatsApp" },
             { href: "https://shopee.co.id/kerakish.id", icon: "fas fa-shopping-bag", label: "Shopee" },
             { href: "https://www.instagram.com/kerakish.id/", icon: "fab fa-instagram", label: "Instagram" },
             { href: "https://www.tiktok.com/@kerakish", icon: "fab fa-tiktok", label: "TikTok" }
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 hover:text-white transition"
                >
                  <i className={`${item.icon} text-xl`}></i>
                  <span className="relative after:block after:h-[2px] after:bg-white after:w-0 after:transition-all after:duration-300 group-hover:after:w-full">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright & Social Icons */}
      <div className="mt-10 text-center text-gray-800 border-t border-gray-700 pt-5">
        <p>
          Copyright ©2025 All rights reserved | Block is made with by{" "}
          <a 
            href="#" 
            className="text-gray-900 font-bold relative after:block after:w-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
          >
            Kerakish
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
