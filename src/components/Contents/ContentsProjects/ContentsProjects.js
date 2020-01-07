import React, { Component } from 'react';

import classes from './ContentsProjects.module.css';
import Budget from '../../../assets/budget.PNG';
import Travel from '../../../assets/travel-site.PNG';
import JsGame from '../../../assets/js-game.PNG';
import PigGame from '../../../assets/pig-game.PNG';
import FlexPannel from '../../../assets/css-flex-pannel.PNG';
import Animation from '../../../assets/sass-animated.PNG';


const pictureDiv = [
  {
    id: 'Budget',
    url: Budget,
    type: 'js',
    link:'https://nicolehle.github.io/budget-app/',
    description: 'Projects with React and js html. asdsdgf lkjasdie lkjhadfpow asldk dlfkjpqwoie'
  },
  {
    id: 'Travel',
    url: Travel,
    type: 'html',
    link:'https://nicolehle.github.io/travel-site/',
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

class ContentsProjects extends Component {
  state = {
    type: 'both'
  }

  allProjHandler = () => {
    this.setState({type: 'both'});
  }

  jsProjHandle = () => {
    this.setState({type: 'js'});
  }

  vanilaProjHandler = () => {
    this.setState({type: 'html'});
  }

  render() {
      let projectAll = null;
      let projectJs = null;
      let projectHtml = null;

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

      projectJs =
      pictureDiv.map(proj => {
        if(proj.type === 'js'){
          return (
            <div className={classes.Box} key={proj.id}>
            <a href='/'>
            <img src={proj.url} alt={proj.id}/>
            </a>
            <p>{proj.description}</p>
            </div>
          )
        }
        return projectJs;
      })

      projectHtml =
      pictureDiv.map(proj => {
        if(proj.type === 'html'){
          return (
            <div className={classes.Box} key={proj.id}>
            <a href='/'>
            <img src={proj.url} alt={proj.id}/>
            </a>
            <p>{proj.description}</p>
            </div>
          )
        }
        return projectHtml;
      })


    return (
      <div className={classes.Projects}>
        <div>
          <h1>Featured Projects</h1>
        </div>

        <div className={classes.Nav}>
          <ul>
            <li onClick={this.allProjHandler}>All</li>
            <li onClick={this.jsProjHandle}>JS & React.js</li>
            <li onClick={this.vanilaProjHandler}>Html & CSS</li>
          </ul>
        </div>

        <div className={classes.ContentProjectItem}>
          {this.state.type === 'both' ? projectAll : this.state.type === 'js' ? projectJs : projectHtml}
        </div>
      </div>
    )
  }
};

export default ContentsProjects;
