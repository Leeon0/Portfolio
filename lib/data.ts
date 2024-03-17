import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import discoverflixImg from "@/public/discoverflix.png";
import chscreenshotImg from "@/public/chscreenshot.png";

import smallurlimg from "@/public//samllurlimage.png";
import lsvgImg from "@/public//librarysvg.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer",
    location: "Paroquia da Calheta",
    description:
      "My experience includes working as a full stack developer for the website of the Parish of Calheta. I contributed to building the website using JavaScript, HTML, and CSS, while also managing the database aspect with MySQL. These experiences were gained during internships while attending the professional programming course at EBS Calheta.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2021 - July 2021",
  },
  {
    title: "Fullstack Junior Developer",
    location: "AlticeLabs - Full-time",
    description:
      " During my internship with Altice Labs as part of the CTESP in Information Systems Programming Technologies program, I immersed myself in the company's programming languages, including PHP, HTML, JavaScript, TypeScript, and CSS, while also learning about their operational methodologies. I developed a chatbot for the company's website using BOTschool and worked closely with a team of experienced software developers. Additionally, I expanded my skills by delving into frameworks and libraries like React, Vue, Angular, while also gaining familiarity with Docker for containerization, and exploring Java and C++. I also acquired knowledge in database management systems such as PostgreSQL and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    date: "February 2023- July 2023",
  },
  /*
  {
    title: "Software Engineer",
    location: "",
    description:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "",
  },
  */
] as const;

export const projectsData = [
  {
    title: "Discover Flix",
    description:
      "Discover Flix is a web application built with Next.js 14 app router that provides information about movies using The Movie Database (TMDb) API. The application features exceptional design and provides necessary details about various movies. It is deployed on Vercel. This website is designed to provide users with a unique experience when exploring movie information. It uses the TMDb API to fetch data and presents it in an intuitive and attractive user interface. ",
    tags: ["JavaScript", "React", "TypeScript", "Node.js","Next.js"],
    icons: [
      "devicon:nextjs",
      "logos:nodejs-icon",
      "logos:javascript",
      "logos:react",
      
      "logos:typescript-icon",
    ],
    imageUrl: discoverflixImg,
    githubLink: "https://github.com/Leeon0/DiscoverFlix-2-version",
    urlLink: "https://discover-flix-2-version.vercel.app/",
  },
  {
    title: "Color Harmony",
    description:
      "Project about a website that can help the programmer or person who has difficulties or doubts in choosing a good color contrast.",
    tags: ["JavaScript", "React", "TypeScript", "Node.js","CSS"],
    icons: [
      "logos:nodejs-icon",
      "logos:javascript",
      "logos:react",
      "logos:file-type-css",
      "logos:typescript-icon",
    ],
    imageUrl: chscreenshotImg,
    githubLink: "https://github.com/Leeon0/ColorHarmony",
    urlLink: "https://color-harmony-two.vercel.app/",
  },
  {
    title: "Logo Library SVG",
    description:
      "SVG icon library! Made with Svelte, Explore a diverse collection of high-quality SVG icons designed to enhance your web projects, apps, and presentations. With easy navigation and regular updates, our library ensures you have access to the latest trends in design. Elevate your projects with our versatile and customizable icons.",
      tags: ["Svelte","JavaScript", "TypeScript","CSS","Tailwind"],
      
      icons: [
        
        "logos:javascript",
        "logos:svelte-icon",
        "logos:file-type-css",
        "logos:typescript-icon",
        "devicon:tailwindcss"
    ],
    imageUrl: lsvgImg,
    githubLink: "https://github.com/Leeon0/Logo-library-new",
    urlLink: "https://logo-library-p5udk5ux5-leonardos-projects-76c3e95b.vercel.app/",
  },
  {
    title: "SmallUrl",
    description:
      "The project leverages several key technologies: Handlebars for template rendering, Fiber for server setup, MongoDB for database functionality, and GoLang for backend development. This tech stack enables the creation of a highly practical and efficient URL shortener solution, combining speed, scalability, and robustness to streamline link management effectively.",
      tags: ["Go","Handlebars","MongoDB"],
      
      icons: [
        "logos:go",
        "logos:handlebars",
        "devicon:mongodb"
    ],
    imageUrl: smallurlimg,
    githubLink: "https://github.com/Leeon0/SmallUrl",
    urlLink: "https://smallurl-wkmx.onrender.com/",
  },
  

  
] as const;


export const skillsData = [
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "Go",
    icon: "devicon:go",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "PHP",
    icon: "logos:php",
  },
  {
    name: "Laravel",
    icon: "logos:laravel",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "Java",
    icon: "logos:java",
  },
 
  {
    name: "SCSS",
    icon: "logos:sass",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "Handlebars",
    icon: "devicon:handlebars",
  },
  {
    name: "Next.js",
    icon: "devicon:nextjs",
  },
  {
    name: "AWS",
    icon: "logos:aws",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
 
  {
    name: "Svelte",
    icon: "logos:svelte-icon", 
  },
  {
    name: "Tailwind",
    icon: "devicon:tailwindcss", 
  },
   {
    name: "MongoDB",
    icon: "devicon:mongodb",
  },
  {
    name: "C#",
    icon: "devicon:csharp",
  },
  {
    name: "C++",
    icon: "devicon:cplusplus",
  },
  {
    name: "Vue.js",
    icon: "logos:vue",
  },
  {
    name: ".NET",
    icon: "devicon:dot-net",
  },
  {
    name: "PostgreSQL",
    icon: "devicon:postgresql",
  }
] as const;
