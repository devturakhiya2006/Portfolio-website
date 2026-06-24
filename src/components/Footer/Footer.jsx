import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const handleScroll = (SectionId) => {
    const section = document.getElementById(SectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className='bg-[#050414] border-t border-white/5 py-12 px-[7vw]'>
      <div className='max-w-7xl mx-auto text-center'>
        {/* Name in plain white - no color class */}

        <h2 className='text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-500'>
          Dev Prajapati
        </h2>

        {/* Navigation Links */}
        <nav className='flex flex-wrap justify-center gap-6 mb-8'>
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className='text-gray-400 hover:text-blue-500 transition-colors text-sm font-medium'
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className='flex justify-center gap-6 mb-8'>
          {[
            { icon: <FaFacebook />, link: "#" },
            { icon: <FaTwitter />, link: "#" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/dev-prajapati-a1a976284/" },
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaYoutube />, link: "#" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-xl text-gray-500 hover:text-blue-500 transition-all hover:-translate-y-1'
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className='text-xs text-gray-600'>
          © {new Date().getFullYear()} Dev Prajapati. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;