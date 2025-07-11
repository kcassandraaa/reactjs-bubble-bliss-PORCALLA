import React from "react";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white sticky top-0 z-50 shadow-md p-3 ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <h3 className="font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text text-2xl ">
              Bubble Bliss
            </h3>
            <span>🧋</span>
          </div>

          <div className=" hidden md:flex gap-9 text-gray-700">
            <a href="#" className="hover:text-pink-500 transition">
              Home
            </a>
            <a href="#types" className="hover:text-pink-500 transition">
              Types
            </a>
            <a href="#toppings" className="hover:text-pink-500 transition">
              Toppings
            </a>
            <a href="#benefits" className="hover:text-pink-500 transition">
              Benefits
            </a>
            <a href="#contact" className="hover:text-pink-500 transition">
              Contact
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8 text-gray-700 text-2xl">
          <a
            href="#"
            className="hover:text-pink-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#types"
            className="hover:text-pink-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Types
          </a>
          <a
            href="#toppings"
            className="hover:text-pink-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Toppings
          </a>
          <a
            href="#benefits"
            className="hover:text-pink-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Benefits
          </a>
          <a
            href="#contact"
            className="hover:text-pink-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
