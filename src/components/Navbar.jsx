import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-black/20 shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg text-white">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/about" className="hover:text-yellow-400">About</Link>
          <Link to="/skills" className="hover:text-yellow-400">Skills</Link>
          <Link to="/projects" className="hover:text-yellow-400">Projects</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
        </div>

        {/* Hamburger Icon (for mobile) */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      {isOpen && (
        <div className="md:hidden  bg-transparent text-white z-40 px-6 pb-4 space-y-4">

          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 hover:text-yellow-400">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 hover:text-yellow-400">About</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)} className="block py-2 hover:text-yellow-400">Skills</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="block py-2 hover:text-yellow-400">Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2 hover:text-yellow-400">Contact</Link>
        </div>
      )}

    </nav>

  );
};

export default Navbar;
