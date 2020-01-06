import React from 'react';

import classes from './Skills.module.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaSass, FaNpm, FaGulp, FaNodeJs } from 'react-icons/fa';

const skills = () => {
  return (
    <div className={classes.Skills}>
      <h1>Skills</h1>
      <div className={classes.Intro}>
          <div className={classes.Icons}>

            <div className={classes.row}>
                <div className={classes.Box}>
                  <FaHtml5 style={{color: "#eb4034"}}/>
                  <FaCss3Alt style={{color: "#4287f5"}}/>
                  <h3>HTML5 & CSS3</h3>
                  <p>html and css with frameworks and aflakdjfalkdjlskdjalskdjalskdjalskdjalsksjj alskdjalskdjalskd</p>
                </div>

                <div className={classes.Box}>
                  <FaJs  style={{color: "#ccd12a"}}/>
                  <FaReact style={{color: "#2adeeb"}}/>
                  <FaNodeJs style={{color: "#07ab07"}}/>
                  <h3>JavaScript & React.js & Node.js</h3>
                  <p>html and css with frameworks and aflakdjfalkdjlskdjalskdjalskdjalskdjalsksjj alskdjalskdjalskd</p>
                </div>
            </div>

            <div className={classes.row}>
                <div className={classes.Box}>
                  <FaNpm style={{color: "#eb4034"}}/>
                  <FaGulp style={{color: "#eb4034"}}/>
                  <h3>NPM & Gulp</h3>
                  <p>html and css with frameworks and aflakdjfalkdjlskdjalskdjalskdjalskdjalsksjj alskdjalskdjalskd</p>
                </div>

                <div className={classes.Box}>
                  <FaSass style={{color: "#e675da"}}/>
                  <FaBootstrap style={{color: "#734985"}}/>
                  <h3>Sass & Bootstrap</h3>
                  <p>html and css with frameworks and aflakdjfalkdjlskdjalskdjalskdjalskdjalsksjj alskdjalskdjalskd</p>
                </div>
            </div>
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
