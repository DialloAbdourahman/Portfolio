import React from 'react';
import { FiGithub } from 'react-icons/fi';
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';

const socialmedia = [
  {
    name: 'GitHub',
    link: '#',
    icon: <FiGithub />,
  },
  {
    name: 'Linkedin',
    link: '#',
    icon: <AiOutlineLinkedin />,
  },
  {
    name: 'FaceBook',
    link: '#',
    icon: <AiOutlineFacebook />,
  },
  {
    name: 'Instagram',
    link: '#',
    icon: <AiOutlineInstagram />,
  },
  {
    name: 'WhatsApp',
    link: '#',
    icon: <BsWhatsapp />,
  },
];

export { socialmedia };
