import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import classes from './ContentsProjects.module.css';
import ContentProjectItem from './ContentProjectItem/ContentProjectItem';

const contentsProjects = (props) => {
  return (
    <div className={classes.Projects}>
      <div>
        <h1>Featured Projects</h1>
      </div>

      <div className={classes.Nav}>
        <ul>
          <li><NavLink to='/projects'>All</NavLink></li>
          <li><NavLink to='/projects/js-react'>JS & React.js</NavLink></li>
          <li><NavLink to='projects/html-css'>Html & CSS</NavLink></li>
        </ul>
      </div>

      <Switch>
        <Route path='/projects' exact component={ContentProjectItem}/>
        <Route path='/projects/js-react'/>
        <Route path='/projects/html-css' />
      </Switch>
    </div>
  )
};

export default contentsProjects;
