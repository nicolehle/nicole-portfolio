import React from 'react';

import { FaLinkedinIn, FaGithub, FaCodepen, FaFreeCodeCamp } from 'react-icons/fa';
import classes from './Info.module.css';
import InfoItems from './InfoItems/InfoItems';

const info = () => (
  <div className={classes.Info}>
      <h1>Nicole Lee</h1>
      <a href='https://linkedin.com/in/nicole-lee-a93b17127' target='_blank' rel='noopener noreferrer'><FaLinkedinIn /></a>
      <a href='https://github.com/nicolehle' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
      <a href='https://codepen.io/nicolehle' target='_blank' rel='noopener noreferrer'><FaCodepen /></a>
      <a href='https://www.freecodecamp.org/fcc396720ac-3753-4275-8368-3dc39b02fe5b' target='_blank' rel='noopener noreferrer'><FaFreeCodeCamp/></a>
      <InfoItems />
  </div>
);

export default info;
