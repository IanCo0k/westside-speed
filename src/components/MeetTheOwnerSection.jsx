import React from 'react';
import { motion } from 'framer-motion';
import eli from '../assets/eli.png';
import bg from '../assets/about-bg.png';

const MeetTheOwnerSection = () => {
  return (
    <section id='meet-the-owner-section' className="py-24 text-white" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Meet the Owner
          </h2>
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
              Eli Haddad
            </motion.h3>
            <motion.p
              className="text-lg mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              My name is Eli Haddad, and I have a lifelong passion for fitness and football. I grew up in a family-owned gym, the Fit Pit, where I developed a strong foundation in fitness and a deep appreciation for the benefits of physical training.
            </motion.p>
            <motion.p
              className="text-lg mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Football has been a significant part of my life. As a wide receiver and safety, I've experienced the thrill of competing on the field and have gained valuable insights into the game. I've also had the opportunity to begin a career in coaching, taking the skills that I learned throughout my playing career and teaching them to the next generation of athletes.
            </motion.p>
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Today, as the owner of Westside Fitness, I bring my passion and experiences together to help athletes reach their goals. I believe in creating a supportive and empowering environment where athletes can thrive, and I'm committed to helping them unlock their full potential through tailored training and coaching.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheOwnerSection;
