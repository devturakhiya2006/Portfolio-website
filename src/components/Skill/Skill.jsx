import React from 'react';
import { SkillsInfo } from '../../constent';
import Tilt from 'react-parallax-tilt';

const Skill = () => {
  return (
    <section
      id='skills'
      className='relative py-20 px-[7vw] bg-[#050414] overflow-hidden'
    >
      {/* Section Title & Description - Tightened spacing */}
      <div className='text-center mb-16 max-w-2xl mx-auto'>
        <h2 className='text-4xl font-bold text-white'>Technical Skills</h2>
        <div className='w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full'></div>
        <p className='text-gray-400 mt-6 text-lg font-medium leading-relaxed'>
          A collection of my technical skills honed through various projects and experience.
        </p>
      </div>

      {/* Skills Categories Grid - Increased gap for breathing room */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className='bg-[#0a0a1a] p-8 rounded-3xl border border-white/5 shadow-lg shadow-black/40 hover:border-indigo-500/30 transition-all duration-500'
          >
            <h3 className='text-2xl font-bold text-white mb-8 text-center'>
              {category.title}
            </h3>

            {/* Skill Items */}
            <div className='flex flex-wrap gap-4 justify-center'>
              {category.skills.map((skill) => (
                <Tilt
                  key={skill.name}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  scale={1.05}
                  transitionSpeed={500}
                >
                  <div className='flex items-center gap-3 bg-white/5 border border-white/10 rounded-full py-2.5 px-5 hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all cursor-default'>
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className='w-6 h-6 object-contain'
                    />
                    <span className='text-sm font-medium text-gray-300'>
                      {skill.name}
                    </span>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;