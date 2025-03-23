import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white text-gray-800 shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <img src={Logo} alt="Logo Kerakish" className="w-32 h-auto" />  
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link
            to="home"
            className="cursor-pointer hover:text-yellow-400 transition"
          >
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400 transition">
            Product
          </Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} className="text-yellow-400" /> : <Menu size={28} className="text-yellow-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
          <X size={28} className="text-yellow-400" />
        </button>
        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-xl font-semibold">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              Company Profile
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;