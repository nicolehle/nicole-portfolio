import React from 'react';

import Paint from '../../../assets/paint.jpg';
import classes from './ContentsContact.module.css';
import { FaTelegramPlane } from 'react-icons/fa';

const contentsContact = () => (
  <div className={classes.ContentsContact}>
    <img src={Paint} alt='paint' />
    <h1>Let's Work Together!</h1>
    <div>
      <p style={{fontSize: '1.2rem'}}>Nicole Lee</p>
      <div className={classes.Flex}>
        <p><strong>Email :</strong></p>
        <p>heeyeons1993@gmail.com</p>
        <a href="mailto:heeyeons1993@gmail.com"><FaTelegramPlane style={{marginRight: '10px'}}/><p>Email Me</p></a>
      </div>
      <p><strong>Location :</strong></p>
      <p>Seattle, WA 98133</p>
    </div>
  </div>
);

export default contentsContact;
