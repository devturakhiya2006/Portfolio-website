import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-center px-6 py-4 transition-all duration-300 ${isScrolled ? 'bg-[#050414]/90' : 'bg-[#050414]/50'}`}>
      <div className="w-full max-w-7xl flex items-center justify-between">
        
        {/* Brand */}
        <div className="font-bold tracking-widest uppercase cursor-pointer text-2xl text-white">
          Prajapati<span className="text-indigo-500"> Dev</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-indigo-400 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop Socials */}
        <div className="hidden md:flex items-center gap-5">
          <a href="https://github.com/devturakhiya2006" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition-colors"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/dev-prajapati-a1a976284/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition-colors"><FaLinkedin size={24} /></a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#050414]/95 backdrop-blur-lg border-b border-white/10 flex flex-col items-center py-10 gap-6 md:hidden">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false); 
              }}
              className="text-lg font-medium uppercase tracking-widest text-white hover:text-indigo-400 transition-colors"
            >
              {item.label}
            </button>
          ))}

          {/* Mobile Social Icons */}
          <div className="flex items-center gap-8 mt-4 pt-6 border-t border-white/10">
            <a href="https://github.com/devturakhiya2006" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/dev-prajapati-a1a976284/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors">
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;