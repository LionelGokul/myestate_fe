import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { HiUserGroup } from 'react-icons/hi';
import { RiFeedbackLine } from 'react-icons/ri';
import { GrContact } from 'react-icons/gr';

const SideBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiOutlineHome />,
    cName: 'nav-text',
  },
  {
    title: 'About Us',
    path: '/',
    icon: <HiUserGroup />,
    cName: 'nav-text',
  },
  {
    title: 'Feedback',
    path: '/',
    icon: <RiFeedbackLine />,
    cName: 'nav-text',
  },
  {
    title: 'Contact Us',
    path: '/',
    icon: <GrContact />,
    cName: 'nav-text',
  },
];

export default SideBarData;
