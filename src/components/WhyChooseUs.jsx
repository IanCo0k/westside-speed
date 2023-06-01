import React from 'react';
import { motion } from 'framer-motion';
import image from '../assets/about.jpg';
import { Link } from 'react-scroll';

const WhyChooseUsSection = () => {
  return (
    <section id='why-choose-us-section' className="main-bg py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Us?
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl mb-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We provide a range of services to help you achieve your fitness goals and improve your overall performance.
            </motion.p>
            <ul className="space-y-4 text-gray-300">
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Agility Training
              </motion.li>
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Speed Training
              </motion.li>
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Strength Training
              </motion.li>
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Expert Coaching
              </motion.li>
            </ul>
            <div className="text-center mt-12 d-flex justify-between">
            <Link
            to="meet-the-owner-section"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
          >
            <motion.button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 mx-3 rounded-full transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Learn More
            </motion.button>
          </Link>
          <Link
            to="contact-section"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
          >
            <motion.button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 mx-3 rounded-full transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get Started
            </motion.button>
          </Link>
        </div>
          </div>
          <div className="md:order-first">
            <motion.img
              src={image}
              alt="Fitness Services"
              className="w-full h-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
