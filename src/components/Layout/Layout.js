import React from 'react';

import Profile from '../Profile/Profile';
import Navigation from '../Navigation/Navigation';
import Aux from '../../auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Contents from '../Contents/Contents';

const layout = (props) => {
  return (
    <Aux>
      <div className={classes.Layout}>
        <Profile />
        <div>
            <Navigation />
            <Contents />
        </div>
      </div>
    </Aux>
  )
}

export default layout;
