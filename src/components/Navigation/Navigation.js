import React from 'react';

import classes from './Navigation.module.css';

const navigation = () => (
    <div className={classes.Navigation}>
      <ul>
        <li><a href="/">About Me</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </div>
);

export default navigation;
