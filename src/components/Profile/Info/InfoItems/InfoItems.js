import React from 'react';

import { FaFileAlt, FaTelegramPlane } from 'react-icons/fa';
import classes from './InfoItems.module.css';

const infoItems = () => {
  return (
  <div className={classes.InfoItems}>
    <div>
      <a href="https://resume.creddle.io/resume/78o0g8p2jp0" target='_blank' rel='noopener noreferrer'><FaFileAlt /><p>Resume</p></a>
      <a href="mailto:heeyeons1993@gmail.com"><FaTelegramPlane /><p>Contact</p></a>
    </div>
  </div>
  )
};

export default infoItems;
