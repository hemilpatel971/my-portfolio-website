import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
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
    "Machine Learning Engineer",
    icon: React.createElement(CgWorkAlt),
    date: "Feb. 2022 - Aug. 2022",
    pos: "right",
  },
  {
    title: "HiTech ISolutions LLP",
    location: "Ahmedabad, India",
    description:
    "Data Scientist",
    icon: React.createElement(CgWorkAlt),
    date: "Oct. 2019 - Jan. 2022",
    pos: "right",
  },
  {
    title: "Divine Infosys Pvt. Ltd.",
    location: "Ahmedabad, India",
    description:
    "As a Data Analyst, crafted multiple dashboards featuring over 10 essential KPIs, utilizing various visualization tools.",
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
    title: "My personal portfolio",
    description:
      "I developed this project with the dual purpose of honing my programming skills through learning and providing a platform to showcase my projects.",
    tags: ["Node.JS", "Next.JS", "Tailwind", "TypeScript", "CSS"],
    imageUrl: corpcommentImg,
    githubUrl: "https://github.com/hemilpatel971/",
  },
  {
    title: "Damage car detection",
    description:
      "A CNN classification model to identify if a car is damaged or not from images and deployed as a web app using django.",
    tags: ["Python", "Django", "Neural Networks"],
    imageUrl: rmtdevImg,
    githubUrl: "https://github.com/hemilpatel971/Damage-car-detection",
  },
  {
    title: "Expense tracker",
    description:
      "Built a personal expense tracker web app using MERN stack.",
    tags: ["Node.JS", "Express.js", "MongoDB", "React.js"],
    imageUrl: wordanalyticsImg,
    githubUrl: "https://github.com/hemilpatel971/Expense-tracker-personal",
  },
] as const;

export const skillsData = [
  "Python",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
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
