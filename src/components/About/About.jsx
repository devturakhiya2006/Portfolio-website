import React from 'react';
import { TypeAnimation } from "react-type-animation";
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
// Ensure this path is correct for image_13.png
import profileImage from "../../assets/profile2.jpg";
const About = () => {
  return (
    <section id='about' className='relative py-20 px-[7vw] flex items-center min-h-[90vh] bg-[#050414] overflow-hidden'>
      {/* Background Glows */}
      <div className="absolute top-10 -left-20 w-72 h-72 bg-indigo-500/15 rounded-full blur-[120px]"></div>

      {/* Main Container: flex-col for mobile, flex-row for desktop */}
      <div className='relative flex flex-col lg:flex-row justify-between items-center w-full max-w-6xl mx-auto gap-12'>

        {/* Content Side (Left) - Takes order 2 on mobile, 1 on desktop */}
        <motion.div
          className='lg:w-1/2 text-center lg:text-left z-10 order-2 lg:order-1'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-indigo-300 font-mono text-sm tracking-[0.3em] uppercase mb-6">
            Ahmedabad, India | M.Sc. IT Student
          </p>
          <h1 className='text-6xl md:text-8xl font-bold text-white mb-6'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-500'>
              Dev Prajapati
            </span>
          </h1>
          <div className="mb-8">
            <TypeAnimation
              sequence={[
                "Front-End Developer", 2000,
                "UI/UX Designer", 2000,
                "Software Developer", 2000
              ]}
              wrapper="div"
              className="text-2xl md:text-3xl text-indigo-100 font-medium"
              repeat={Infinity}
            />
          </div>
          <div className="mb-10 lg:pl-6 border-l-2 border-indigo-500/40">
            <p className="text-lg text-gray-200 leading-relaxed text-center lg:text-left">
              Building systems, not just code. I merge technical expertise with a passion for clean UI/UX to create functional, intuitive B2B tools.
            </p>
          </div>

          {/* Button - Centered */}
          <div className="flex justify-center lg:justify-start">
            <a href='https://drive.google.com/file/d/1N0lGytSHYqJUsr23z6mPZK8O3A4lJGOC/view?usp=sharing'
              target="_blank" rel="noopener noreferrer"
              className='py-5 px-12 rounded-full text-sm font-bold uppercase bg-gradient-to-r from-indigo-600 to-violet-700 text-white hover:scale-105 transition-transform'>
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Image Side (Right) - Takes order 1 on mobile, 2 on desktop */}
        <motion.div
          className='flex justify-center order-1 lg:order-2'
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Trigger re-build */}
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
            {/* Container providing the gradient border and shadow */}
            <div className='relative p-1 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-600 shadow-2xl'>
              {/* 
                FIXED IMAGE CLASSES:
                1. object-contain: Ensures the whole image fits inside without cropping the face.
                2. bg-[#100e2e]: Adds a slightly lighter dark background INSIDE the circle to frame the image.
                3. p-2: Adds some padding so the image doesn't touch the gradient border.
              */}
              <img
                src={profileImage}
                alt='Dev Prajapati'
                className='w-64 h-64 md:w-[380px] md:h-[380px] object-cover object-top rounded-full bg-[#100e2e] p-1' />
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;