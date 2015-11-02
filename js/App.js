require('font-awesome/css/font-awesome.css');
require('../node_modules/skeleton-css/css/skeleton.css');
require('../css/custom.css');

import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import LoginHandler from './components/Login.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Skill from './components/Skill.js';
import Contact from './components/Contact.js';

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
        case '/':          Child = About; break;
        case '/about':     Child = About; break;
        case '/skill':     Child = Skill; break;
        case '/contact':   Child = Contact; break;
        default:           Child = Home;
      }

      return (
        <div className="container">
          <div className="row" style={{textAlign:'center',marginTop:'3vh'}}>
            <a href="/" title="Home"><i className="fa fa-home fa-2x"></i></a>
          </div>
          <div className="main-values row">
            <div className="four columns">
              <a className="button" href="#/about">About</a>
            </div>
            <div className="four columns">
              <a className="button" href="#/skill">Skills</a>
            </div>
            <div className="four columns">
              <a className="button" href="#/contact">Contact</a>
            </div>
          </div>
          <Child/>
        </div>
      )
  }
};

export default App;
