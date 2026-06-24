// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import PHP from './assets/tech_logo/PHP.png';

// Experience Section Logo's
import WebitoLogo from './assets/temp_logo.png';


// Education Section Logo's
import jgLogo from './assets/education_logo/Jg_University.png'
import BhanvaLogo from './assets/education_logo/BhavnaSchool.jpeg'

// Project Section Logo's
import Empproject from './assets/work_logo/Emp_man_system.png';
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      // { name: 'SASS', logo: sassLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      //{ name: 'Springboot', logo: springbootLogo },
      //{ name: 'Node JS', logo: nodejsLogo },
      // { name: 'Express JS', logo: expressjsLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'PHP', logo: PHP },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: WebitoLogo, // Make sure WebitoLogo is imported correctly as discussed
    role: "UI/UX Designer Intern",
    company: "Webito Infotech",
    date: "June 2025 - july-2025", // Use "Present" if you are currently working there
    desc: "Focused on crafting intuitive user experiences for mobile and web applications. Responsible for creating high-fidelity prototypes, conducting user research, and refining design systems to ensure a seamless interface for end-users. Collaborated closely with developers to bridge the gap between design concepts and functional code.",
    skills: [
      "Figma",
      "Adobe XD",
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Responsive Design",
      "Design Systems",
      "Interaction Design",
      "Collaboration"
    ],
  },
  // {
  //   id: 1,
  //   img: agcLogo,
  //   role: "Fullstack Engineer",
  //   company: "Agumentik Group of Companies",
  //   date: "July 2023 - March 2024",
  //   desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
  //   skills: [
  //     "ReactJS",
  //     "Redux",
  //     "JavaScript",
  //     "Tailwind CSS",
  //     "HTML",
  //     "CSS",
  //     "SQL",
  //   ],
  // },
  // {
  //   id: 2,
  //   img: newtonschoolLogo,
  //   role: "Frontend Intern",
  //   company: "Newton School",
  //   date: "September 2021 - August 2022",
  //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
  //   skills: [
  //     "HTML",
  //     "CSS",
  //     "Javascript",
  //     "Bootstrap",
  //     "Figma",
  //     "Material UI",
  //   ],
  // },
];

export const education = [
  {
    id: 0,
    img: jgLogo,
    school: "JG University, Ahmedabad",
    date: "2023 - Present",
    grade: "7.6 CGPA",
    desc: "Currently enrolled in the Integrated BSc + MSc (IT) programme. Successfully completed the BSc (IT) requirements with a 7.6 CGPA and a consistent record of Distinction in all semesters.",
    degree: "BSc (IT) completed | Pursuing MSc (IT)",
  },
  {
    id: 1,
    img: BhanvaLogo, // Ensure the logo import is correct for your school
    school: "Bhavna Higher Secondary Vidhyalay",
    date: "March 2023",
    grade: "81.07% (Grade A2)",
    desc: "Completed Higher Secondary Certificate (HSC) in the Commerce stream with a total score of 608/750. Achieved a percentile rank of 95.67, demonstrating high academic proficiency in business and analytical subjects.",
    degree: "HSC (Class XII) - Commerce Stream",
  },
  {
    id: 3,
    img: BhanvaLogo,
    school: "Bhavna Higher Secondary Vidhyalay",
    date: "May 2021",
    grade: "85.67% (Grade A2)",
    desc: "Completed Secondary School Certificate (SSC) with a percentile rank of 95.32. Demonstrated consistent academic excellence across core subjects including Mathematics, Science, and Social Science.",
    degree: "SSC (Class X)",
  },
];

export const projects = [
  {
    id: 1,
    title: "Image Search App",
    description:
      "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    image: imagesearchLogo,
    tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Search-App",
    webapp: "https://imagsearch.netlify.app/",
  },
  {
  id: 0, // Ensure this ID is unique
  title: "Employee Management System | Admin Task Allocation ",
  description: "A professional admin dashboard application engineered for efficient task assignment and workflow tracking. Built with React.js and Tailwind CSS, the platform empowers administrators to delegate work seamlessly while enabling real-time tracking of employee tasks. It utilizes local storage to provide a fast, reliable, and smooth administrative oversight experience.",
  image: Empproject, // Make sure to update this with your actual image import variable
  tags: ["React JS", "Tailwind CSS", "JavaScript", "Frontend Development"],
  github: "https://github.com/devturakhiya2006/Emp_managenet_system",
  webapp: "https://devturakhiya2006.github.io/Emp_managenet_system/",
},
];  