import React from 'react';
import { motion } from 'framer-motion';
import eli from '../assets/eli.png';

const MeetTheOwnerSection = () => {
  return (
    <section id='meet-the-owner-section' className="main-bg py-24 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Meet the Owner
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius lectus et nisi porta, et eleifend
            lorem placerat. Mauris laoreet neque ac urna luctus, vitae facilisis quam congue.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.img
              src={eli}
              alt="Owner Name"
              className="w-82 h-auto rounded-full" // Adjusted the size of the image
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <div className="md:w-1/2 p-4"> {/* Added padding to the text section */}
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              John Doe
            </motion.h3>
            <motion.p
              className="text-lg mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius lectus et nisi porta, et eleifend
              lorem placerat. Mauris laoreet neque ac urna luctus, vitae facilisis quam congue.
            </motion.p>
            <motion.p
              className="text-lg mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Sed at dolor sed nisl commodo mattis vel ut lectus. Fusce vitae tincidunt tellus, in tempus est. Integer
              luctus lorem nec gravida fringilla. Phasellus quis mattis velit.
            </motion.p>
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Quisque sollicitudin nibh id quam convallis, at aliquam sem luctus. Aenean sed risus turpis. Nunc quis
              venenatis nunc, nec ultrices mi.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheOwnerSection;
