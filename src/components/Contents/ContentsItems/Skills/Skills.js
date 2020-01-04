import React from 'react';

import classes from './Skills.module.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaSass, FaNpm, FaGulp, FaNodeJs } from 'react-icons/fa';

const skills = () => {
  return (
    <div className={classes.Skills}>
      <div className={classes.Intro}>
        <h1>Skills</h1>
          <div className={classes.Icons}>
            <FaHtml5 />
            <FaCss3Alt />
            <FaSass />
            <FaJs />
            <FaReact />
            <FaNodeJs />
            <FaNpm />
            <FaGulp />
            <FaBootstrap />
          </div>
      </div>


      <div className={classes.Arrange}>
          <div>
              <h2>HTML</h2>
                <div className={[classes.Battery, classes.Char1].join(' ')}></div>
          </div>

          <div>
              <h2>CSS</h2>
                <div className={[classes.Battery, classes.Char2].join(' ')}></div>
          </div>

          <div>
              <h2>JavaScript ES6</h2>
                <div className={[classes.Battery, classes.Char3].join(' ')}></div>
          </div>

          <div>
              <h2>React.js</h2>
                <div className={[classes.Battery, classes.Char4].join(' ')}></div>
          </div>
        </div>
      </div>
  );
}

export default skills;
