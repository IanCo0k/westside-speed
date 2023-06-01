import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import logo from '../assets/westside.svg';

const Navigation = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY <= 75;
      setShowNavigation(isTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 py-4 px-6 z-50 ${
        showNavigation ? 'bg-transparent px-12 py-12' : 'main-bg bg-opacity-80'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="hero-section"
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                activeClass="font-bold"
                className="text-white hover:text-gray-400 cursor-pointer"
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
                className="text-white hover:text-gray-400 cursor-pointer"
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
                className="text-white hover:text-gray-400 cursor-pointer"
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
                className="text-white hover:text-gray-400 cursor-pointer"
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
                className="text-white hover:text-gray-400 cursor-pointer"
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
                className="text-white hover:text-gray-400 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
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
      {isMenuOpen && (
        <div className="md:hidden main-bg">
          <ul className="mt-4">
            <li>
              <Link
                to="hero-section"
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                activeClass="font-bold"
                className="block py-2 px-4 text-white hover:text-gray-400"
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
                className="block py-2 px-4 text-white hover:text-gray-400"
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
                className="block py-2 px-4 text-white hover:text-gray-400"
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
                className="block py-2 px-4 text-white hover:text-gray-400"
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
                className="block py-2 px-4 text-white hover:text-gray-400"
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
                className="block py-2 px-4 text-white hover:text-gray-400"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navigation;
