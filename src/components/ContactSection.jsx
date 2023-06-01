import React from 'react';
import { motion } from 'framer-motion';
import bg from '../assets/contact-bg.png';

const ContactSection = () => {
  return (
    <section id='contact-section' className="py-24 text-white" style={{ background: `url(${bg})`, backgroundPosition: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Contact Us
              </h2>
              <p className="text-lg md:text-xl mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius lectus et nisi porta, et eleifend
                lorem placerat. Mauris laoreet neque ac urna luctus, vitae facilisis quam congue.
              </p>
            </div>
          </div>
          <div className="max-w-md mx-auto md:mx-0 w-full md:w-96">
            <form>
              <div className="mb-6">
                <motion.input
                  type="text"
                  placeholder="Your Name"
                  className="w-full py-3 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className="mb-6">
                <motion.input
                  type="email"
                  placeholder="Your Email"
                  className="w-full py-3 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </div>
              <div className="mb-6">
                <motion.textarea
                  placeholder="Your Message"
                  className="w-full py-3 px-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                ></motion.textarea>
              </div>
              <div className="text-center md:text-right">
                <motion.button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
