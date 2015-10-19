
require('../node_modules/skeleton-css/css/skeleton.css');
require('../css/custom.css');

import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import LoginHandler from './components/Login.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Skill from './components/Skill.js';
import Lifestyle from './components/Lifestyle.js';

class App extends React.Component{

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  };

  render() {
      let Child

      switch (this.state.route) {
        case '/':          Child = Home; break;
        case '/about':     Child = About; break;
        case '/skill':     Child = Skill; break;
        case '/lifestyle': Child = Lifestyle; break;
        default:           Child = Home;
      }

      return (
        <div className="container">
          <section className="header">
            <h1 className="title">Application</h1>
          </section>
          <div className="main-values row">
            <div className="four columns">
              <a href="#/about">About</a>
            </div>
            <div className="four columns">
              <a href="#/skill">Skills</a>
            </div>
            <div className="four columns">
              <a href="#/lifestyle">Lifestyle</a>
            </div>
          </div>
          <Child/>
        </div>
      )
  }
};

export default App;
