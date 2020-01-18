import React, { Component } from 'react';

import classes from './ContentsProjects.module.css';
import Budget from '../../../assets/budget.PNG';
import Travel from '../../../assets/travel-site.PNG';
import JsGame from '../../../assets/js-game.PNG';
import PigGame from '../../../assets/pig-game.PNG';
import FlexPanel from '../../../assets/css-flex-pannel.PNG';
import Animation from '../../../assets/sass-animated.PNG';


const pictureDiv = [
  {
    id: 'Budget App',
    url: Budget,
    type: 'js',
    link:'https://github.com/nicolehle/budget-app',
    description: 'A budget app mainly using JavaScript ES5. Primarily practice for reusable function structures with one task for one function and Dom manipulation.'
  },
  {
    id: 'Travel Site',
    url: Travel,
    type: 'jshtml',
    link:'https://github.com/nicolehle/travel-site',
    description: 'A virtual travel agency website. Focused on making layout with css and responsive application. Gulp is used as development tool and scroll effects'
  },
  {
    id: 'JsGame',
    url: JsGame,
    type: 'js',
    link:'https://github.com/nicolehle/simple-js-canvas-game',
    description: 'A simple JavaScript based game. Using html as a canvas, you can move in x/y directions via keyboard.'
  },
  {
    id: 'PigGame',
    url: PigGame,
    type: 'js',
    link:'https://github.com/nicolehle/pig-game',
    description: 'Dice game where you aim to score 100 first. Mainly used JavaScript and was intended to practice game flow and build architecture before code. Also uses Dom manipulation.'
  },
  {
    id: 'Flex Panel',
    url: FlexPanel,
    type: 'html',
    link:'https://codepen.io/nicolehle/pen/QWLoXLN',
    description: 'Created a set of panels featuring flex with each reacting to clicks by enlarging, revealing text. Class names are consistent and inclusive for equivalent elements, applying  CSS style and script efficiently.'
  },
  {
    id: 'CSS Animation',
    url: Animation,
    type: 'html',
    link:'https://codepen.io/nicolehle/pen/xxxzWVB',
    description: 'A css animation with click event. Using Sass to make a clean and structured style sheet.'
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
