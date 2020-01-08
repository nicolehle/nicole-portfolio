import React from 'react';

import Aux from '../../../auxiliary/Auxiliary';
import classes from './ContentsItems.module.css';
import Skills from './Skills/Skills';
import MainPic from '../../../assets/portpic.jpg';

const contentsItems = (props) => {
  return (
    <Aux>
        <h1 className={classes.Name}>Nicole Heeyeon Lee</h1>
        <div className={classes.Introduction}>
          <div>
            <p>Hi, my name is Nicole Lee and I'm a web developer specialised in frontend development. Welcome to my personal website! My final goal is to be a full stack developer.</p>
            <img src={MainPic} alt='desk'/>
          </div>
        </div>
        <Skills />
    </Aux>
  );
};

export default contentsItems;
