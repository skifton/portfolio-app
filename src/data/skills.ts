import {
  FaHtml5,
  FaReact,
  FaCss3,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaBootstrap,
  FaNpm,
} from "react-icons/fa";
import { FaSass } from "react-icons/fa6";
import {
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiJest,
  SiTestinglibrary,
  SiMaterialdesign,
  SiGraphql,
  SiGatsby,
  SiVite,
  SiWebpack,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiMongodb, DiMysql } from "react-icons/di";
import { ISkill } from "../models/skill.models";

export const SKILLS: ISkill[] = [
  {
    name: "React",
    value: "react",
    icon: FaReact,
    description:
      "Proficient in React, crafting dynamic interfaces for scalable, efficient web apps",
  },
  {
    name: "Redux",
    value: "redux",
    icon: SiRedux,
    description:
      "Skilled in Redux, enhancing data flow for efficient, maintainable React apps",
  },
  {
    name: "TypeScript",
    value: "typescript",
    icon: SiTypescript,
    description:
      "Proficient in TypeScript, ensuring robust, scalable code for error-free, maintainable projects",
  },
  {
    name: "CSS",
    value: "css",
    icon: FaCss3,
    description:
      "CSS mastery for seamless design, leveraging frameworks for captivating, responsive interfaces",
  },
  {
    name: "HTML",
    value: "html",
    icon: FaHtml5,
    description:
      "Expertise in structured HTML, ensuring clean, accessible, and efficient code for seamless web experiences",
  },
  {
    name: "Tailwind CSS",
    value: "tailwindcss",
    icon: SiTailwindcss,
    description:
      "Proficiency in Tailwind CSS for rapid, scalable, and modern UI development, utilizing a utility-first approach",
  },
  {
    name: "Material UI",
    value: "materialui",
    icon: SiMaterialdesign,
    description:
      "Proficient in Material-UI for intuitive and responsive web interfaces using its robust components",
  },
  {
    name: "Bootstrap",
    value: "bootstrap",
    icon: FaBootstrap,
    description:
      "Bootstrap proficiency: crafting sleek, responsive web interfaces for seamless user experiences",
  },
  {
    name: "Sass",
    value: "sass",
    icon: FaSass,
    description:
      "Skilled in Sass for efficient, scalable, and maintainable CSS workflows.",
  },
  {
    name: "Gatsby JS",
    value: "gatsbyjs",
    icon: SiGatsby,
    description:
      "Skilled in foundational aspects of GatsbyJS for creating performant and dynamic web applications.",
  },
  {
    name: "Next.js",
    value: "nextjs",
    icon: TbBrandNextjs,
    description:
      "Proficient in fundamental features of Next.js, enabling the creation of efficient and dynamic web applications.",
  },
  {
    name: "Node.js",
    value: "nodejs",
    icon: FaNodeJs,
    description:
      "Basic Node.js: handling requests, async JavaScript in event-driven architecture for server-side scripting",
  },
  {
    name: "Express",
    value: "express",
    icon: SiExpress,
    description:
      "Express.js familiarity: routing, middleware handling for APIs, HTTP request management on server-side",
  },
  {
    name: "MongoDB",
    value: "mongodb",
    icon: DiMongodb,
    description:
      "Familiar with MongoDB: data storage, retrieval, CRUD operations in document-oriented databases",
  },
  {
    name: "MySQL",
    value: "mysql",
    icon: DiMysql,
    description:
      "Proficient in MySQL: database creation, table management, query execution, and optimization",
  },
  {
    name: "GraphQL",
    value: "graphql",
    icon: SiGraphql,
    description:
      "Proficient in fundamental concepts of GraphQL for efficient API development and data management.",
  },
  {
    name: "Jest",
    value: "jest",
    icon: SiJest,
    description:
      "Skilled in Jest for reliable JavaScript unit testing, ensuring robust and error-free applications",
  },
  {
    name: "React Testing Library",
    value: "reacttestinglibrary",
    icon: SiTestinglibrary,
    description:
      "Proficient in React Testing Library, ensuring comprehensive testing for reliable React components, boosting app reliability",
  },
  {
    name: "GitHub",
    value: "github",
    icon: FaGithub,
    description:
      "Proficient in Git for version control and basic collaboration. Familiar with staging, committing, and pushing changes",
  },
  {
    name: "Figma",
    value: "figma",
    icon: FaFigma,
    description:
      "Skilled in Figma, adept at creating intuitive UI/UX designs and collaborative workflows for web applications.",
  },
  {
    name: "NPM",
    value: "npm",
    icon: FaNpm,
    description:
      "Capable in leveraging NPM to manage dependencies, streamline workflows, and optimize project environments",
  },
  {
    name: "Vite",
    value: "vite",
    icon: SiVite,
    description:
      "Efficiently using Vite for rapid web development, optimizing build times and workflows",
  },
  {
    name: "Webpack",
    value: "webpack",
    icon: SiWebpack,
    description:
      "Leveraging Webpack for streamlined asset optimization, boosting performance in web apps",
  },
];
