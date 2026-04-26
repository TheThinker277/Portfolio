import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  coupa,
  xperi,
  fossee,
  snowflake,
  jenkins,
  openai,
  ror,
  nextjs,
  Sammat,
  ethereum,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [ { title: "Full-Stack Engineer", icon: web, }, { title: "AI Integration", icon: creator, }, { title: "Test Automation", icon: backend, }, { title: "3D Web Experiences", icon: mobile, }, ];
const technologies = [ 
  { name: "TypeScript", icon: typescript }, 
  { name: "JavaScript", icon: javascript },
   { name: "React JS", icon: reactjs }, 
   { name: "Redux", icon: redux },
    { name: "Next JS", icon: nextjs },
    { name: "Node JS", icon: nodejs }, 
    { name: "Tailwind CSS", icon: tailwind }, 
     { name: "Ruby on Rails", icon: ror }, 
     { name: "Snowflake", icon: snowflake },
     { name: "OpenAI API", icon: openai }, 
     { name: "Git", icon: git },
      { name: "Jenkins", icon: jenkins },
      { name: "Figma", icon: figma }];

const experiences = [
  { title: "Software Development Engineer", company_name: "Coupa Software", icon: coupa, iconBg: "#383E56", date: "Aug 2025 - Present", points: [ "Built a full-stack AI classification system (React/TypeScript + Ruby on Rails + Snowflake) that automates manual categorization for enterprise customers.", "Integrated speech-to-text and text-to-speech into Navi, Coupa's AI assistant, enabling voice-driven enterprise workflows.", "Developed the Control Tower dashboard frontend (React, Material UI, Clarity CSS) with REST API integration.", "Tracked and remediated Snyk security vulnerabilities across Analytics ETL and Analytics Hub services.", ], },
  {
    title: "Software Engineer, Quality & Automation",
    company_name: "Coupa Software",
    icon: coupa,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Jun 2025",
    points: [
      "Built and maintained 100+ automated API test suites for customer-facing APIs.",
      "Increased automated test coverage from 70% to 95%.",
      "Reduced flaky test failures by 30% through infrastructure and stability improvements.",
    ],
  },
  { title: "Software Development Engineer Intern", company_name: "Xperi", icon: xperi, iconBg: "#383E56", date: "Aug 2023 - Dec 2023", points: [ "Modernized internal UI across 10+ components using HTML5, CSS Grid/Flexbox, and accessibility best practices.", "Built customizable field groups, accordion panels, and dual-list boxes with drag-and-drop and form validation.", "Optimized data processing and reduced page load time by ~25% while strengthening input validation.", "Authored API documentation and improved developer onboarding for the platform.", ], },
 { title: "Software Development Engineer Intern", company_name: "IIT Bombay (FOSSEE)", icon: fossee, iconBg: "#E6DEDD", date: "May 2022 - Jul 2022", points: [ "Extended the XCos on Cloud platform with robust data handling and performance improvements, supporting 1000+ concurrent users.", "Implemented secure DataID-based serialization to improve data integrity across the simulation pipeline.", "Added error handling and retry mechanisms for EventSource command classification, reducing failure rates by 50%.", "Optimized chart rendering algorithms, improving render time by 35% on large datasets.", ], },
];

const testimonials = [];

const projects = [
  {
    name: "Sammat India",
    description:
      "Built a full-stack web platform with multilingual support (English/Hindi), drag-and-drop document uploads to AWS S3, and Netlify CI/CD pipelines reducing deployment time by 80%.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "aws-s3",
        color: "pink-text-gradient",
      },
    ],
    image: Sammat,
    source_code_link: "https://github.com/TheThinker277",
  },
  {
    name: "MemeR0t",
    description:
      "Decentralized application for one-to-many token swaps with real-time token pricing, allocation ratios, and slippage protection.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
    ],
    image: ethereum,
    source_code_link: "https://github.com/TheThinker277",
  },
  {
    name: "3D Portfolio v1",
    description:
      "Interactive 3D portfolio experience with custom shaders, lazy loading, and Lighthouse performance score above 90.",
    tags: [
      {
        name: "react-three-fiber",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "gsap",
        color: "pink-text-gradient",
      },
    ],
    image: threejs,
    source_code_link: "https://github.com/TheThinker277",
  },
];

export { services, technologies, experiences, testimonials, projects };