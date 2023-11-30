import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpg';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-2.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';


export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/port',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Mekdes',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Haftu',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Ethiopia',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Addiss Abebe',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '0976135908',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'mekdeshaftu373@Gmail.com',
  },

  {
    id: 9,
    title: 'telegram : ',
    description: '@mekdewey',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Ameharic, English,tigrigna',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '7+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '2+',
    title: 'internship Experience',
  },

  {
    id: 4,
    no: '2+',
    title: ' online <br /> certification',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2020 - PRESENT',
    title: 'Web Developer <span> T3 Technlogy company </span>',
    desc: 'I have been working with T3 Technology Company since my second year as a software engineering student. During my time there, I have developed various websites, mobile applications, and logos.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 ',
    title: 'Internship <span>Intracom  ICT solution</span>',
    desc: 'As an intern, I had the opportunity to participate in various projects with Intracom ICT Solution plc, including CCTV camera installation and the development of an e-learning platform.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2019 - present',
    title: 'graphics designe <span> self</span>',
    desc: 'I also have experience working with Adobe Photoshop and Adobe Illustrator. These tools have allowed me to enhance my skills in graphic design and create visually appealing assets for websites, mobile applications, and logos.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018',
    title: 'Engineering Degree <span> Don Bosco secondary school </span>',
    desc: 'I graduated with a diploma from Don Bosco Catholic Missionary School. This educational institution provided me with a strong foundation and equipped me with the necessary knowledge and skills to excel in my field.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019-present',
    title: 'Software Engineering <span>   ASTU</span>',
    desc: 'Currently, I am studying software engineering at Adama Science and Technology University. ',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2009',
    title: 'Management degree<span>St. Mary University </span>',
    desc: 'I am currently studying management at St. Mary University. This program has provided me with a solid foundation in various aspects of business management, including strategic planning, organizational behavior, marketing, and financial management.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'html,css,js',
    percentage: '95',
  },

  {
    id: 2,
    title: 'figma',
    percentage: '84',
  },

  {
    id: 3,
    title: 'Graphics designer ',
    percentage: '77',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '85',
  },

  {
    id: 5,
    title: 'flutter',
    percentage: '85',
  },

  {
    id: 6,
    title: 'python',
    percentage: '70',
  },

  {
    id: 7,
    title: 'C++ , java',
    percentage: '55',
  },

  {
    id: 8,
    title: 'React js',
    percentage: '90',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'project',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'web: ',
        desc: 'app',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: ' flutter',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Mekdi-19/javaproje.git',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Mekdi-19/javaproje.git',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: '',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'project',
      },
      {
        icon: <FiUser />,
        title: 'student  : ',
        desc: 'registartion',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'c++',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Mekdi-19/javaproje.git',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'project',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'link',
      },
      {
        icon: <FiUser />,
        title: ':dksjks ',
        desc: 'dskljds',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'python',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Mekdi-19/javaproje.git',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: ' :mdjkdfjfd ',
        desc: 'git link',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'https://github.com/Mekdi-19/javaproje.git',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'project',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: ' :lalalla ',
        desc: 'lalalal',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'java',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Mekdi-19/javaproje.git',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
