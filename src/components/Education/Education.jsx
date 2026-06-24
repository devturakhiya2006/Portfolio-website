import React from 'react';
import { education } from '../../constent'; // Keeping your correct filename

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[7vw] lg:px-[16vw] bg-[#050414] overflow-hidden"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">Education</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg font-medium">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative max-w-7xl mx-auto">
        {/* Vertical Center Line */}
        <div className="absolute left-8 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-blue-800 to-transparent md:-translate-x-1/2"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex items-center mb-24 ${
              index % 2 === 0 ? "md:justify-end" : "md:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#0f0f1a] border-2 border-blue-700 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(30,58,138,0.5)]">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-8 h-8 object-contain"
              />
            </div>

            {/* Education Card */}
            <div
              className={`w-[85%] md:w-[42%] ml-auto md:ml-0 rounded-3xl border border-white/10 bg-[#0a0a1a] backdrop-blur-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-700 hover:shadow-[0_0_30px_rgba(30,58,138,0.25)]`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-xl overflow-hidden shrink-0 p-1">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-blue-500 font-medium">
                    {edu.school}
                  </h4>
                  <p className="text-gray-500 text-sm mt-1 font-mono">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-blue-300 font-bold bg-blue-900/20 px-4 py-2 rounded-lg border border-blue-800/30 w-max">
                  Grade: {edu.grade}
                </p>
                <p className='text-gray-400 leading-relaxed'>{edu.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;