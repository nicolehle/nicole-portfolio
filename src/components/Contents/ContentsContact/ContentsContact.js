import React from 'react';

import Paint from '../../../assets/paint.jpg';
import classes from './ContentsContact.module.css';
import { FaFileAlt, FaTelegramPlane } from 'react-icons/fa';

const contentsContact = () => (
  <div className={classes.ContentsContact}>
    <img src={Paint} alt='paint' />
    <h1>Let's Work Together!</h1>
    <div>
      <p style={{fontSize: '1.2rem'}}><strong>Nicole Lee</strong></p>
      <div className={classes.Flex}>
        <p><strong>Email :</strong></p>
        <p>heeyeons1993@gmail.com</p>
        <a href="mailto:heeyeons1993@gmail.com"><FaTelegramPlane style={{marginRight: '5px'}}/><p>Email Me</p></a>
      </div>
      <div className={classes.Flex}>
        <p><strong>Resume</strong></p>
        <a href="https://resume.creddle.io/resume/78o0g8p2jp0" target='_blank' rel='noopener noreferrer'><FaFileAlt style={{marginRight: '5px'}}/><p>My Resume</p></a>
      </div>
      <p><strong>Location :</strong></p>
      <p>Seattle, WA 98133</p>
    </div>
  </div>
);

export default contentsContact;
