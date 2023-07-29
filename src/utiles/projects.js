import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { BsBrowserChrome } from 'react-icons/bs';

const importantProjects = [
  {
    name: 'Assoh Backend API',
    description:
      'Assoh is application that allows people to sell their products to customers without having to create a full e-commerce website. This application is made for Aficans and hence uses Africans currencies and marketing strategies. It is still under development.',
    technologies: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'Socket.io',
      'TypeScript',
      'Prisma.js',
    ],
    links: [
      {
        icon: <FiGithub />,
        link: 'https://github.com/DialloAbdourahman/Assoh-Backend',
      },
    ],
  },
  {
    name: 'Assoh Frontend',
    description:
      'Assoh is application that allows people to sell their products to customers without having to create a full e-commerce website. This application is made for Aficans and hence uses Africans currencies and marketing strategies. It is still under development.',
    technologies: ['React.js', 'Socket.io', 'Axios.js', 'Styled Components'],
    links: [
      {
        icon: <FiGithub />,
        link: 'https://github.com/DialloAbdourahman/Assoh-Frontend',
      },
    ],
  },
  {
    name: 'Pharmacy App Frontend',
    description:
      'The pharmacy application is an application that allows pharmacies to manage all their inventory and at the same time, make all their products available online so that customers can search through them and even order through the application. The pharmacy application uses geolocalization to help customers find the closest pharmacy having the medication they are looking for.',
    technologies: ['React.js', 'Axios.js', 'Styled Components'],
    links: [
      {
        icon: <FiGithub />,
        link: 'https://github.com/nelsonludo/pharmacyAppFrontEnd',
      },
    ],
  },
  {
    name: 'Pharmacy App Backend API',
    description:
      'The pharmacy application is an application that allows pharmacies to manage all their inventory and at the same time, make all their products available online so that customers can search through them and even order through the application. The pharmacy application uses geolocalization to help customers find the closest pharmacy having the medication they are looking for.',
    technologies: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'TypeScript',
      'Prisma.js',
    ],
    links: [
      {
        icon: <FiGithub />,
        link: 'https://github.com/DialloAbdourahman/PharmacyBackend',
      },
    ],
  },
  {
    name: 'Comfy Sloth',
    description:
      'My first e-commerce website which allows users to order products. It has all modern e-commerce websites functionalites such as login, add to cart, payment with stripe api, etc.',
    technologies: [
      'React',
      'Auth0',
      'Course API',
      'Stripe Api',
      'Styled Components',
    ],
    links: [
      {
        icon: <FiGithub />,
        link: 'https://github.com/DialloAbdourahman/comfy-sloth',
      },
      {
        icon: <BsBrowserChrome />,
        link: 'https://storied-sprinkles-fae36c.netlify.app/',
      },
    ],
  },

  {
    name: 'Search Github Users',
    description:
      'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages and starred repositories.',
    technologies: [
      'React',
      'Auth0',
      'Github API',
      'Chart.js',
      'Styled Components',
    ],
    links: [
      {
        icon: <FiGithub />,
        link: 'https://github.com/DialloAbdourahman/Search_Github_Users',
      },
      {
        icon: <BsBrowserChrome />,
        link: 'https://diallo-search-github-users.netlify.app/login',
      },
    ],
  },
  {
    name: 'Chat app',
    description:
      'This is the first chat application I made. Here, users can create or join rooms and from there they can start chating with each other using text messages. But be careful! Bad words are not allowed.',
    technologies: ['Node.js', 'Express', 'Express HandleBars', 'Socket.io'],
    links: [
      {
        icon: <FiGithub />,
        link: 'https://github.com/DialloAbdourahman/chat_app',
      },
      // {
      //   icon: <BsBrowserChrome />,
      //   link: 'https://diallo-chat-app.herokuapp.com/',
      // },
    ],
  },
  {
    name: 'Task Manager API',
    description:
      'This is my first CRUD api. It contains all necessary functionalities such as authentication, saving data to database, sending email to users, etc. This is also where I learned where to deploy a mongoDB database.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'SendGrid Email API'],
    links: [
      {
        icon: <FiGithub />,
        link: 'https://github.com/DialloAbdourahman/Task-Manager-API',
      },
    ],
  },
];

const notSoImportantProjects = [
  {
    name: 'Parrainage',
    description:
      'This is a website used during the sponsorship of POLYTHEQUE which is an engineering school in my country. It consist of a small game that allow students to choose their sponsors based on what they are passionate about.',
    technologies: ['React.js', 'CSS'],
    links: [
      {
        icon: <FiGithub />,
        link: 'https://github.com/DialloAbdourahman/parrainage',
      },
      {
        icon: <BsBrowserChrome />,
        link: 'https://parrainage-gele-gtel.netlify.app/',
      },
    ],
  },
  {
    name: 'Portfolio',
    description:
      'This is a SPA that I created to showcase all my projects. This is the app you are using right now.',
    technologies: ['React.js', 'Styled Components'],
    links: [
      {
        icon: <FiGithub />,
        link: 'https://github.com/DialloAbdourahman/Portfolio',
      },
    ],
  },
  {
    name: 'Weather App',
    description:
      "A small weather app that takes in the location and prints out the weather. It allowed me to understand how to make requests to external API's from my server this time around.",
    technologies: [
      'Node.js',
      'Express.js',
      'Weather API',
      'Express HandleBars',
    ],
    links: [
      {
        icon: <FiGithub />,
        link: 'https://github.com/DialloAbdourahman/node.js-weather-app',
      },
      // {
      //   icon: <BsBrowserChrome />,
      //   link: 'https://mighty-forest-46842.herokuapp.com/',
      // },
    ],
  },
];

export { importantProjects, notSoImportantProjects };
