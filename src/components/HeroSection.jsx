import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/westside.svg';
import background from '../assets/hero-bg.svg';

const HeroSection = () => {
  return (
    <section id='hero-section' className="hero-section bg-gray-900  text-white py-24">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="md:order-2">
            <motion.img
              src={logo}
              alt="Westside Speed and Strength"
              className="w-full h-auto"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>
          <div className="md:order-1">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Welcome to Westside Speed and Strength
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We are dedicated to helping you achieve your fitness goals and reach your full potential.
            </motion.p>
            <motion.button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero-section {
          background-image: url(${background});
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
