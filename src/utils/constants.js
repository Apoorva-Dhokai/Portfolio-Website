import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMediumM,
  FaJava,
  FaDatabase,
  FaFileAlt
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
  SiLeetcode,
  SiCodeforces,
  SiHackerrank,
  SiCodechef,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Certifications", path: "/experience" },
  { text: "Blogs", path: "/blogs" },
  { text: "Contact", path: "/contact" }
];

export const interestsData = [
  {
    interest: "Leetcode",
    icon: SiLeetcode,
    url: "https://leetcode.com/u/Apoorva_Dhokai/"
  },
  {
    interest: "CodeForces",
    icon: SiCodeforces,
    url: "https://codeforces.com/profile/Apoorva_Dhokai"
  },
  {
    interest: "HakerRank",
    icon: SiHackerrank,
    url: "https://www.hackerrank.com/profile/apoorvadhokai"
  },
  {
    interest: "CodeChef",
    icon: SiCodechef,
    url: "https://www.codechef.com/users/apoorvadhokai"
  },
];

export const skillsData = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "Jquery",
    icon: BiLogoJquery,
  },
  {
    name: "Typescript",
    icon: TbBrandTypescript,
  },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  },
  {
    name: "C/C++",
    icon: TbBrandCpp,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "Java",
    icon: FaJava,
  },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "Redux",
    icon: TbBrandRedux,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    icon: FaDatabase,
  },
  {
    name: "MySQL",
    icon: FaDatabase,
  },
  {
    name: "Docker",
    icon: FaDocker,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
];

export const workData = [
  {
    company: "IBM Full Stack Software Developer",
    // designation: "Software Engineer 2",
    duration: "IBM (Coursera)",
    companyImg: "ibm.svg",
    description: (
      <>
        <button><a href="https://coursera.org/share/10488c3c7d3905c982210a73ec229235" target="_blank">View</a></button>
      </>
    ),
  },
  {
    company: "Software Engineering",
    // designation: "Software Engineer 2",
    duration: "IIT Kharagpur (NPTEL)",
    companyImg: "nptel.png",
    description: (
      <>
        <button><a href="https://drive.google.com/file/d/14P6umW61rBDVXroP0USeQEdBmDzYtoIr/view?usp=sharing" target="_blank">View</a></button>
      </>
    ),
  },
  {
    company: "Data Analytics with Python",
    // designation: "Software Engineer 2",
    duration: "IIT Roorkee (NPTEL)",
    companyImg: "nptel.png",
    description: (
      <>
        <button><a href="https://drive.google.com/file/d/1oHsQlufEopo4h2YYCq9HjpLZ-8Ho8XTO/view?usp=sharing" target="_blank">View</a></button>
      </>
    ),
  },
  {
    company: "Networking Essentials",
    // designation: "Software Engineer 2",
    duration: "Cisco Networking Academy",
    companyImg: "cisco.jpg",
    description: (
      <>
        <button><a href="https://drive.google.com/file/d/1dZy32T6ns8JWGw4cZQC4UYCl6JvmocZs/view?usp=sharing" target="_blank">View</a></button>
      </>
    ),
  },
  {
    company: "Python for Beginners: Learn Python from Scratch",
    // designation: "Software Engineer 2",
    duration: "Infosys",
    companyImg: "infosys.jpg",
    description: (
      <>
        <button><a href="https://drive.google.com/file/d/1TKWIXRJS1-BpOFvBQ4Aly4gtn2zLgdUm/view?usp=sharing" target="_blank">View</a></button>
      </>
    ),
  },
  {
    company: "Java for beginners: Step-by-step hands-on guide to Java",
    // designation: "Software Engineer 2",
    duration: "Infosys",
    companyImg: "infosys.jpg",
    description: (
      <>
        <button><a href="https://drive.google.com/file/d/1zXYJt1RI6EtnDS7RT7CM4a4jx3pAV7cM/view?usp=sharing" target="_blank">View</a></button>
      </>
    ),
  },
  {
    company: "React JS: Complete Guide for Frontend Web Development",
    // designation: "Software Engineer 2",
    duration: "Udemy",
    companyImg: "udemy.png",
    description: (
      <>
        <button><a href="https://drive.google.com/file/d/1Kvo6JvGonDGq6-nXr7y-srhMY48WdCqA/view?usp=sharing" target="_blank">View</a></button>
      </>
    ),
  },
  {
    company: "Basics of Database Design and Development",
    // designation: "Software Engineer 2",
    duration: "Udemy",
    companyImg: "udemy.png",
    description: (
      <>
        <button><a href="https://drive.google.com/file/d/1ENKKj4qTD_ezDEIWTwU2Dhg6_kaMzLse/view?usp=sharing" target="_blank">View</a></button>
      </>
    ),
  },
];

export const projectsData = [
  {
    // type: "WEB-APP",
    title: "Swasthya Samrat",
    image: "hd",
    link: null,
    source: null,
  },
  {
    // type: "WEB-APP",
    title: "Food Yatri",
    image: "fy",
    link: null,
    source: "https://github.com/Apoorva-Dhokai/Food_Yatri",
  },
  {
    // type: "WEB-APP",
    title: "Bite Buzz",
    image: "bb",
    link: null,
    source: "https://github.com/Apoorva-Dhokai/BiteBuzz",
  },
  {
    // type: "WEB-APP",
    title: "Personal Portfolio",
    image: "pp",
    link: null,
    source: "https://github.com/Apoorva-Dhokai/Portfolio-Website",
  },
  {
    // type: "WEB-APP",
    title: "Spam Alert System",
    image: "sa",
    link: null,
    source: "https://github.com/Apoorva-Dhokai/Spam-Alert-System",
  },
];

export const socialMediaLinks = [
  {
    href: "https://github.com/Apoorva-Dhokai",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.instagram.com/apoorva_dhokai/",
    icon: FaInstagram,
    backgroundColor: "social.instagram",
    hoverColor: "social.instagramHover",
  },
  {
    href: "https://www.linkedin.com/in/apoorva-dhokai-64b35a237/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  {
    href: "https://x.com/ApoorvaDhokai",
    icon: FaXTwitter,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://drive.google.com/file/d/1nVl1tTHEAiGczgXLCWEblFm5smMFOoN3/view?usp=sharing",
    icon: FaFileAlt,
    backgroundColor: "social.hashnode",
    hoverColor: "social.hashnodeHover",
  },
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
