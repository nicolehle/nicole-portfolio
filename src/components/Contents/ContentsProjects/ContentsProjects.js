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
    id: 'Budget App',
    url: Budget,
    type: 'js',
    link:'https://nicolehle.github.io/budget-app/',
    description: 'A budget app. JavaScript ES5 is main language. Focusing on  two parts. 1. resusable function structure with one task for one function. 2. Dom manipulation.'
  },
  {
    id: 'Travel Site',
    url: Travel,
    type: 'jshtml',
    link:'https://nicolehle.github.io/travel-site/',
    description: 'A virtual travel agency website. Focused on making layout with css and responsive application. Gulp is used as development tool and scroll effects'
  },
  {
    id: 'JsGame',
    url: JsGame,
    type: 'js',
    link:'https://nicolehle.github.io/simple-js-canvas-game/',
    description: 'A simple JavaScirpt based game. Using html as canvas, a hero moves x and y direction by keyboard'
  },
  {
    id: 'PigGame',
    url: PigGame,
    type: 'js',
    link:'https://nicolehle.github.io/pig-game/',
    description: 'A dice game, winning score 100. JavaScirpt is main language. Understanding game flow and build architecture before code. Dom manipulating.'
  },
  {
    id: 'Flex Pannel',
    url: FlexPannel,
    type: 'html',
    link:'https://codepen.io/nicolehle/full/QWLoXLN',
    description: 'Created a set of panels featuring flex with each reacting to clicks by enlarging, revealing text. Class names are consistent and inclusive for equivalent elements, applying  CSS style and script efficiently.'
  },
  {
    id: 'CSS Animation',
    url: Animation,
    type: 'html',
    link:'https://codepen.io/nicolehle/full/xxxzWVB',
    description: 'A css animation with click event. Using Sass to make clean and structured style sheet.'
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
              <a href={proj.link} target='_blank' rel='noopener noreferrer'>
                <img src={proj.url} alt={proj.id}/>
              </a>
              <div className={classes.Flex}>
                <h2>{proj.id}</h2>
                <p>{proj.description}</p>
              </div>
            </div>
          )
      })

      projectJs =
      pictureDiv.map(proj => {
        if(proj.type === 'js' || proj.type === 'jshtml'){
          return (
            <div className={classes.Box} key={proj.id}>
              <a href={proj.link} target='_blank' rel='noopener noreferrer'>
                <img src={proj.url} alt={proj.id}/>
              </a>
              <div className={classes.Flex}>
                <h2>{proj.id}</h2>
                <p>{proj.description}</p>
              </div>
            </div>
          )
        }
        return projectJs;
      })

      projectHtml =
      pictureDiv.map(proj => {
        if(proj.type === 'html' || proj.type === 'jshtml'){
          return (
            <div className={classes.Box} key={proj.id}>
              <a href={proj.link} target='_blank' rel='noopener noreferrer'>
                <img src={proj.url} alt={proj.id}/>
              </a>
              <div className={classes.Flex}>
                <h2>{proj.id}</h2>
                <p>{proj.description}</p>
              </div>
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
