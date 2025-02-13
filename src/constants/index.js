import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  figma,
  docker,

  meta,
  starbucks,
  tesla,
  shopify,
  classhook,
  skyit,

  carrent,
  jobit,
  tripguide,

  vert,
  warriorsgo,
  pacman,
  maintenance,

  shahab,
  alexander,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "ClassHook",
    icon: classhook,
    iconBg: "#383E56",
    date: "June 2023 - October 2023",
    points: [
      "Implemented UI improvements and security enhancements for ClassHook that increased user monetization and retention.",
    ],
  },
  {
    title: "Backend Engineer",
    company_name: "SkyIT Services",
    icon: skyit,
    iconBg: "#E6DEDD",
    date: "June 2024 - September 2024",
    points: [
      "Developing and optimizing backend software for SkyIT’s cloud-based fleet management solution, increasing software effectiveness.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of hiring Ryan as a software engineering intern at ClassHook. He demonstrated curiosity, an eagerness to learn, coachability, and accountability over his work. I would recommend Ryan to any prospective employer considering working with him.",
    name: "Alexander Deeb",
    designation: "CEO",
    company: "ClassHook",
    image: alexander,
  },
  {
    testimonial:
      "Ryan’s technical proficiency in backend technologies, including Django REST framework, Firebase, JavaScript, and Python, was evident from day one. Ryans’s ability to adapt to new technologies, coupled with their problem-solving skills, marked them as a standout member of our team.",
    name: "Shahab Seyedi",
    designation: "Executive Director",
    company: "SkyIT Services",
    image: shahab,
  },
];

const projects = [
  {
    name: "Warriors Go",
    description:
    "App providing real-time game scores, stats, live chat, and news updates using third-party sports APIs.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "flutter",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "firebase",
        color: "purple-text-gradient",
      },
    ],
    image: warriorsgo,
    source_code_link: "https://warriors-go.vercel.app/",
  },
  {
    name: "Easy Vert",
    description:
      "Website for users to upload videos and calculate vertical jump height through key frame analysis and slow-motion playback.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: vert,
    source_code_link: "https://github.com/ryanhui30/vert",
  },
  {
    name: "AI Pacman",
    description:
      "Artificial intellgence Pacman model with optimized pathfinding and decision-making for strategic and efficient gameplay.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "AI/ML algorithms",
        color: "green-text-gradient",
      },
      {
        name: "pathfinding",
        color: "pink-text-gradient",
      },
    ],
    image: pacman,
    source_code_link: "https://github.com/ryanhui30/ai-pacman",
  },
  {
    name: "On Track",
    description:
      "Streamlined maintenance tracking system for technicians to manage equipment logs and visualize maintenance metrics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "next.js",
        color: "orange-text-gradient",
      },
    ],
    image: maintenance,
    source_code_link: "https://github.com/ryanhui30/maintenance-tracker",
  },
];

export { services, technologies, experiences, testimonials, projects };
