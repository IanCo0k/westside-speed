import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import logo from '../assets/westside.svg';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-6 main-bg text-white md:flex md:justify-between md:items-center">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>
      <ul className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
        <li>
          <Link
            to="hero-section"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            activeClass="font-bold"
            className="block py-4 px-4 text-white hover:text-gray-400 text-large "
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="why-choose-us-section"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            activeClass="font-bold"
            className="block py-4 px-4 text-white hover:text-gray-400 text-large "
            onClick={toggleMenu}
          >
            Why Choose Us
          </Link>
        </li>
        <li>
          <Link
            to="meet-the-owner-section"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            activeClass="font-bold"
            className="block py-4 px-4 text-white hover:text-gray-400 text-large "
            onClick={toggleMenu}
          >
            Meet the Owner
          </Link>
        </li>
        {/* Add more menu items for other sections */}
        <li>
          <Link
            to="testimonials-section"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            activeClass="font-bold"
            className="block py-4 px-4 text-white hover:text-gray-400 text-large "
            onClick={toggleMenu}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="locations-section"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            activeClass="font-bold"
            className="block py-4 px-4 text-white hover:text-gray-400 text-large "
            onClick={toggleMenu}
          >
            Locations
          </Link>
        </li>
        <li>
          <Link
            to="contact-section"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            activeClass="font-bold"
            className="block py-4 px-4 text-white text-large bg-blue-400 rounded-sm"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
