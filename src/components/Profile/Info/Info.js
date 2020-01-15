import React from 'react';

import { FaLinkedinIn, FaGithubAlt, FaCodepen, FaFreeCodeCamp } from 'react-icons/fa';
import classes from './Info.module.css';
import InfoItems from './InfoItems/InfoItems';

const info = () => (
  <div className={classes.Info}>
      <h1>Nicole Lee</h1>
        <div className={classes.Flex}>
          <a href='https://linkedin.com/in/nicole-lee-a93b17127' target='_blank' rel='noopener noreferrer'><FaLinkedinIn /></a>
          <a href='https://github.com/nicolehle' target='_blank' rel='noopener noreferrer'><FaGithubAlt /></a>
          <a href='https://codepen.io/nicolehle' target='_blank' rel='noopener noreferrer'><FaCodepen /></a>
          <a href='https://www.freecodecamp.org/fcc396720ac-3753-4275-8368-3dc39b02fe5b' target='_blank' rel='noopener noreferrer'><FaFreeCodeCamp/></a>
        </div>
      <InfoItems />
  </div>
);

export default info;
