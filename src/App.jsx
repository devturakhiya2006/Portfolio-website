import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skill/Skill';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact'; // ADDED THIS IMPORT
import Blurblob from './Blurblob';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div className="min-h-screen bg-dark-100 text-white overflow-x-hidden relative">
      {/* Background ambient blobs */}
      <Blurblob position={{ top: '5%', left: '15%' }} size={{ width: '550px', height: '550px' }} />
      <Blurblob position={{ top: '45%', left: '85%' }} size={{ width: '450px', height: '450px' }} />
      <Blurblob position={{ top: '85%', left: '25%' }} size={{ width: '500px', height: '500px' }} />

      {/* Navbar */}
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
        style={{ zIndex: 999999, marginTop: '60px' }} // Added marginTop to clear the navbar
      />
      {/* Main Content Sections */}
      <main className="relative z-0 pt-20">
        <About />

        {/* Skills: Primary Background */}
        <div className="bg-[#050414] section-top-glow">
          <Skills />
        </div>

        {/* Experience: Different Background + Gradient Transition */}
        <div className="bg-[#0a0a1a] section-gradient-divider">
          <Experience />
        </div>

        {/* Projects: Primary Background */}
        <div className="bg-[#050414] section-top-glow">
          <Work />
        </div>

        {/* Education: Secondary Tint */}
        {/* Education: Secondary Tint */}
        <div className="bg-[#0a0a1a] section-gradient-divider py-16"> {/* Add py-16 here */}
          <Education />
        </div>

        {/* Contact: Primary Background - Reduce py-32 to py-20 */}
        {/* Contact: Primary Background - Change py-32 to py-12 */}
        <section id="contact" className="py-12 px-6 max-w-7xl mx-auto bg-section-primary">
          <Contact />
        </section>
      </main>

      <Footer />
      {/* Footer */}
      {/* <footer className="relative z-0 border-t border-white/5 py-8 text-center text-sm text-gray-400 bg-dark-100">
        © {new Date().getFullYear()} Dev Prajapati. Built with React & Tailwind.
      </footer> */}
    </div>
  );
};

export default App;