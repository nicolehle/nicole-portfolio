import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import classes from './Navigation.module.css';
import ContentsItems from '../Contents/ContentsItems/ContentsItems';
import ContentsProjects from '../Contents/ContentsProjects/ContentsProjects';
import ContentsContact from '../Contents/ContentsContact/ContentsContact';

const navigation = () => (
    <div className={classes.Navigation}>
      <ul>
        <li><NavLink to="/"
            exact>About Me</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      <Switch>
        <Route path="/" exact component={ContentsItems} />
        <Route path="/projects" exact component={ContentsProjects} />
        <Route path="/contact" exact component={ContentsContact} />
      </Switch>
    </div>
);

export default navigation;
