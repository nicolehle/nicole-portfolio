import React, { Component } from 'react';

import classes from './ContentProjectItem.module.css';
import Budget from '../../../../assets/budget.PNG';
import Travel from '../../../../assets/travel-site.PNG';
import JsGame from '../../../../assets/js-game.PNG';
import PigGame from '../../../../assets/pig-game.PNG';
import FlexPannel from '../../../../assets/css-flex-pannel.PNG';
import Animation from '../../../../assets/sass-animated.PNG';

const pictureDiv = [
  {
    id: 'Budget',
    url: Budget,
    type: 'js',
    description: 'Projects with React and js html. asdsdgf lkjasdie lkjhadfpow asldk dlfkjpqwoie'
  },
  {
    id: 'Travel',
    url: Travel,
    type: 'html',
    description: 'Projects with React and js html. asdsdgf lkjasdie lkjhadfpow asldk dlfkjpqwoie'
  },
  {
    id: 'JsGame',
    url: JsGame,
    type: 'js',
    description: 'Projects with React and js html. asdsdgf lkjasdie lkjhadfpow asldk dlfkjpqwoie'
  },
  {
    id: 'PigGame',
    url: PigGame,
    type: 'js',
    description: 'Projects with React and js html. asdsdgf lkjasdie lkjhadfpow asldk dlfkjpqwoie'
  },
  {
    id: 'FlexPannel',
    url: FlexPannel,
    type: 'html',
    description: 'Projects with React and js html. asdsdgf lkjasdie lkjhadfpow asldk dlfkjpqwoie'
  },
  {
    id: 'Animation',
    url: Animation,
    type: 'html',
    description: 'Projects with React and js html. asdsdgf lkjasdie lkjhadfpow asldk dlfkjpqwoie'
  }
]

class ContentProjectItem extends Component {
  render() {
    let projectAll = null;

    projectAll =
    pictureDiv.map(proj => {
      return (
      <div className={classes.Box} key={proj.id}>
        <a href='/'>
          <img src={proj.url} alt={proj.id}/>
        </a>
        <p>{proj.description}</p>
      </div>
    )
    })


    return (
      <div className={classes.ContentProjectItem}>
        {projectAll}
      </div>
    )
  }
};

export default ContentProjectItem;
