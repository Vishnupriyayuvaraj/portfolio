import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';



export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React.js']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Python', ]
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB','MySQL']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['React Native']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Azure']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Figma']
  }
];



export const projects = [
  {
    title: "Letterboxd Clone",
    description: "A social film discovery platform where users can log, rate, and review movies with user authentication and watchlists.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "https://letterboxd-p7gl.onrender.com",
    code: "https://github.com/Vishnupriyayuvaraj/Letterboxd",
  },
  {
    title: "FlowCRM",
    description: "An AI-powered sales CRM SaaS with pipeline management, lead tracking, and intelligent sales companion features.",
    image: projectImg2,
    tech: ["React", "Node.js", "AI"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "https://zenz-saas-flowcrm-1-1.onrender.com",
    code: "https://github.com/Vishnupriyayuvaraj/flowcrm--1-",
  },
  {
    title: "IMS Dashboard",
    description: "A mission-critical inventory management system with real-time stock tracking, analytics, and order management.",
    image: projectImg3,
    tech: ["React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "https://mission-critical-ims-dashboard-3.onrender.com",
    code: "https://github.com/Vishnupriyayuvaraj/mission-critical-ims-dashboard",
  },
  {
    title: "AI Cloudverse",
    description: "An AI-powered Fiverr-style freelance marketplace with intelligent gig matching, project listings, and buyer-seller flows.",
    image: projectImg4,
    tech: ["React", "Firebase", "AI"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "https://ai-fiverclone-cloudverse.vercel.app",
    code: "https://github.com/Vishnupriyayuvaraj/AI-cloudverse",
  },
  {
    title: "Prolance Marketplace",
    description: "A full-featured freelance marketplace connecting clients and professionals with project bidding and payment integration.",
    image: projectImg5,
    tech: ["React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "https://freelance-marketplace-gold.vercel.app",
    code: "https://github.com/Vishnupriyayuvaraj/Freelance-marketplace",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS showcasing projects, skills, and experience with smooth animations.",
    image: projectImg6,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "#",
    code: "#",
  },
  
];



 export const workData = [
  {
    role: "Cloud Intern",
    company: "Cloud Institution",
    duration: "2026 – Present",
    description:
      "Provisioned AWS infrastructure (EC2, S3, RDS, VPC, IAM) reducing manual setup time by 70%. Built CI/CD pipelines using Jenkins, containerized 3+ apps with Docker, and orchestrated deployments on Kubernetes (EKS). Monitored 10+ cloud resources using CloudWatch and Prometheus.",
    color: "purple",
  },
 {
    role: "Web Development Intern",
    company: "Labmentix",
    duration: "Oct 2025 - Nov 2025",
    description:
      "Built a full-featured Freelancer Marketplace (Fiverr clone) with authentication, service listing, and booking modules. Also developed a Google Drive-like cloud storage system with file upload/download functionality and end-to-end frontend-backend integration.",
    color: "blue",
  },
 {
    role: "Front-End Developer Intern",
    company: "White & Box Tech Products & Services",
    duration: "Jun 2025 – Aug 2025",
    description:
      "Developed responsive UI for an OTT (Letterboxd-style streaming) platform using HTML5, CSS3, and JavaScript. Collaborated with backend engineers via GitHub, improved cross-device compatibility, and contributed to measurable page load performance improvements.",
    color: "pink",
  },
];
