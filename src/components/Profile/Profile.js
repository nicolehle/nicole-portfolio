import React from 'react';

import classes from './Profile.module.css';
import Info from './Info/Info';


const profile = (props) => {
  return (
      <div className={classes.Profile}>
          <Info />
      </div>
  )
};

export default profile;
