import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/westside.svg';

const Navigation = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setShowNavigation(isTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    // Implement your logic to scroll to the contact form section
    // You can use scroll libraries like 'react-scroll' or write custom scroll behavior
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 py-4 px-6 bg-black bg-opacity-80 transition-opacity duration-300 ${
        showNavigation ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Your logo component */}
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </motion.div>
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
          onClick={scrollToContact}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
