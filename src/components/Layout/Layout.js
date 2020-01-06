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
        </div>
      </div>
    </Aux>
  )
}

export default layout;
