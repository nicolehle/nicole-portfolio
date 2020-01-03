import React from 'react';

import Profile from '../Profile/Profile';
import Navigation from '../Navigation/Navigation';
import Aux from '../../auxiliary/Auxiliary';
import classes from './Layout.module.css';

const layout = (props) => {
  return (
    <Aux>
      <div className={classes.Layout}>
        <Profile />
        <div>
            <Navigation />
            <h1>Contents</h1>
        </div>
      </div>
    </Aux>
  )
}

export default layout;
