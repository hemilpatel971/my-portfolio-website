import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import portfolioImg from "@/public/portfolio.png";
import cnnImg from "@/public/cnn.png";
import expenseImg from "@/public/expense.png";
import catan from "@/public/catan.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Onsemi.",
    location: "Arizona, USA",
    description:
    "Software Development and Data Integration Engineer",
    icon: React.createElement(CgWorkAlt),
    date: "Aug. 2024 - Present",
    pos: "right",
  },
  {
    title: "Stevens Institute of Technology",
    location: "New Jersey, USA",
    description:
      "Master of Science in Computer Science",
    icon: React.createElement(LuGraduationCap),
    date: "Sept. 2022 - May. 2024",
    pos: "left",
  },
  {
    title: "Deets Digital Pvt. Ltd.",
    location: "Ahmedabad, India",
    description:
    "Software Engineer, developed Flask-based REST APIs automating financing, sales forecasting, and inventory management.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb. 2022 - Aug. 2022",
    pos: "right",
  },
  {
    title: "HiTech ISolutions LLP",
    location: "Ahmedabad, India",
    description:
    "Software Engineer - Data science, led development of credit default model, and product identification tool, achieving significant cost reduction, deployment time savings, and accuracy improvements.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct. 2019 - Jan. 2022",
    pos: "right",
  },
  {
    title: "Divine Infosys Pvt. Ltd.",
    location: "Ahmedabad, India",
    description:
    "Machine Learning Engineer, Developed Transformer model and crafted multiple dashboards featuring over 10 essential KPIs, utilizing various visualization tools.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr. 2019 - Jul. 2019",
    pos: "right",
  },
  {
    title: "Gujarat Technological University",
    location: "Ahmedabad, India",
    description:
      "Bachelor of Technology in Information Technology",
    icon: React.createElement(LuGraduationCap),
    date: "Aug. 2015- May 2019",
    pos: "left",
  },
  
  
] as const;

export const projectsData = [
  {
    title: "Catan Board Generator",
    description:
      "Created this project so that my friends and family can use this to generate random catan boards for epic board game nights.",
    tags: ["TypeScript", "CSS"],
    imageUrl: catan,
    githubUrl: "https://catan-board-generator-xi.vercel.app/",
  },
  {
    title: "Expense tracker",
    description:
      "Built a personal expense tracker web app using MERN stack.",
    tags: ["Node.JS", "Express.js", "MongoDB", "React.js"],
    imageUrl: expenseImg,
    githubUrl: "https://github.com/hemilpatel971/Expense-tracker-personal",
  },
  {
    title: "Damage car detection",
    description:
      "A CNN classification model to identify if a car is damaged or not from images and deployed as a web app using django.",
    tags: ["Python", "Django", "Neural Networks"],
    imageUrl: cnnImg,
    githubUrl: "https://github.com/hemilpatel971/Damage-car-detection",
  },
  {
    title: "My personal portfolio",
    description:
      "I developed this project to improve my programming skills while also serving as a platform to showcase my work.",
    tags: ["Node.JS", "Next.JS", "Tailwind", "TypeScript", "CSS"],
    imageUrl: portfolioImg,
    githubUrl: "https://github.com/hemilpatel971/",
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "Spring Boot",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Redux",
  "GraphQL",
  "Express.js",
  "Django",
] as const;
