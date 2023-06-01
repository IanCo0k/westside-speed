import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/westside.svg';

const Footer = () => {
  return (
    <motion.footer
      className="main-bg py-6 text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={logo} // Replace with actual path to your logo image
            alt="Logo"
            className="h-8 w-auto mr-2"
          />
          <p className="text-sm">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
