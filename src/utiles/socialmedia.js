import React from 'react';
import { FiGithub } from 'react-icons/fi';
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';

const socialmedia = [
  {
    name: 'GitHub',
    link: 'https://github.com/DialloAbdourahman',
    icon: <FiGithub />,
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/abdourahman-diallo-a502421b4/',
    icon: <AiOutlineLinkedin />,
  },
  {
    name: 'FaceBook',
    link: 'https://www.facebook.com/abdourahman.diallo.33046',
    icon: <AiOutlineFacebook />,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/dialliabdourahman78/',
    icon: <AiOutlineInstagram />,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/A_Diallo_bdou',
    icon: <AiOutlineTwitter />,
  },
];

export { socialmedia };
