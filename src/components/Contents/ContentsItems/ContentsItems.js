import React from 'react';

import Aux from '../../../auxiliary/Auxiliary';
import classes from './ContentsItems.module.css';
import Skills from './Skills/Skills';

const contentsItems = (props) => {
  return (
    <Aux>
      <div className={classes.Introduction}>
        <h1>Nicole Heeyeon Lee</h1>
        <p>adfjsldkfjaldkjflaskdjflaskdjflaskdfjalksdjflaskdjflaskdjf</p>
      </div>
      <Skills />
    </Aux>
  );
};

export default contentsItems;
