import React from "react";
import { experiences } from "../../constent";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[7vw] lg:px-[16vw] bg-[#050414] overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <p className="text-blue-600 uppercase tracking-[4px] text-sm font-medium">
          Experience
        </p>

        <h2 className="text-5xl font-bold text-white mt-3">
          My Professional{" "}
          <span className="text-blue-600">Journey</span>
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          A timeline of my professional growth, experiences, and
          contributions across different roles and projects.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-7xl mx-auto">
        {/* Center Line (Deep Blue Gradient) */}
        <div className="absolute left-8 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-blue-800 to-transparent md:-translate-x-1/2"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex items-center mb-24 ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Timeline Node */}
            <div
              className="absolute left-8 md:left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#0f0f1a] border-2 border-blue-700 flex items-center justify-center z-20 shadow-[0_0_30px_rgba(30,58,138,0.5)]"
            >
              <img
                src={experience.img}
                alt={experience.company}
                className="w-12 h-12 object-contain"
              />
            </div>

            {/* Connector Line */}
            <div
              className={`hidden md:block absolute top-10 h-[2px] bg-blue-800 ${
                index % 2 === 0 ? "left-[42%] w-[8%]" : "right-[42%] w-[8%]"
              }`}
            />

            {/* Card */}
            <div
              className={`w-[85%] md:w-[42%] ml-auto md:ml-0 rounded-3xl border border-white/10 bg-[#0a0a1a] backdrop-blur-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-700 hover:shadow-[0_0_30px_rgba(30,58,138,0.25)]`}
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl overflow-hidden flex-shrink-0">
                    <img src={experience.img} alt={experience.company} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{experience.role}</h3>
                    <h4 className="text-blue-500 font-medium">{experience.company}</h4>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs bg-blue-900/30 text-blue-300 whitespace-nowrap">
                  {experience.date}
                </span>
              </div>

              <p className="mt-6 text-gray-300 leading-8">{experience.desc}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {experience.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm bg-blue-900/20 border border-blue-800/30 text-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Bottom Dot */}
        <div className="absolute left-8 md:left-1/2 bottom-0 -translate-x-1/2 w-5 h-5 rounded-full bg-blue-700 shadow-[0_0_20px_rgba(30,58,138,0.8)]"></div>
      </div>
    </section>
  );
};

export default Experience;