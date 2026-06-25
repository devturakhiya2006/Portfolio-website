import React, { useState } from 'react';
import { projects } from '../../constent';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModel = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModel = () => {
    setSelectedProject(null);
  };

  return (
    <section id='work' className='py-24 px-[7vw] bg-[#050414]'>
      {/* Section Title */}
      <div className='text-center mb-20'>
        <h2 className='text-4xl font-bold text-white'>Featured Projects</h2>
        <div className='w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full'></div>
      </div>

      {/* Project Grid */}
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto'>
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModel(project)}
            className='group bg-[#0a0a1a] rounded-3xl overflow-hidden cursor-pointer border border-white/10 transition-all duration-500 hover:-translate-y-3'
          >
            <div className='p-4'>
              <img 
                src={project.image} 
                alt={project.title}
                className='w-full h-48 object-cover rounded-2xl' 
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-bold text-white mb-2'>{project.title}</h3>
              
              {/* Added Description to main card */}
              <p className='text-gray-400 text-sm mb-4 line-clamp-2'>
                {project.description}
              </p>

              {/* Added Tags to main card */}
              <div className='flex flex-wrap gap-2'>
                {project.tags && project.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className='bg-indigo-500/10 text-indigo-300 text-[10px] font-bold px-2 py-1 rounded-full border border-indigo-500/20'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 pt-20 md:pt-4 backdrop-blur-sm'>
          <div className='bg-[#0a0a1a] border border-white/10 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in duration-300'>
            
            <button
              onClick={handleCloseModel}
              className='absolute top-3 right-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 p-1.5 rounded-full transition-all z-[10000]'
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            <img src={selectedProject.image} alt={selectedProject.title} className='w-full h-56 md:h-64 object-cover' />
            
            <div className='p-6 md:p-8'>
              <h3 className='text-2xl md:text-3xl font-bold text-white mb-4'>{selectedProject.title}</h3>
              
              <div className='text-gray-400 mb-6 leading-relaxed text-sm md:text-base'>
                {selectedProject.description ? <p>{selectedProject.description}</p> : <p>No description available.</p>}
              </div>

              <div className='flex flex-wrap gap-2 mb-8'>
                {selectedProject.tags && selectedProject.tags.map((tag, i) => (
                  <span key={i} className='bg-indigo-500/10 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-indigo-500/20'>
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className='flex gap-4'>
                <a href={selectedProject.github} target='_blank' rel='noreferrer' className='flex-1 text-center bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl font-bold transition-all'>View Code</a>
                <a href={selectedProject.webapp} target='_blank' rel='noreferrer' className='flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold transition-all'>View Live</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;