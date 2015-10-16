
require('../node_modules/skeleton-css/css/skeleton.css');
require('../css/custom.css');

import React from 'react';
import ReactDom from 'react-dom';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import LoginHandler from './components/Login.js';


class Home extends React.Component{
  render(){
    return(<div>Home page</div>)
  }
}

class Skill extends React.Component{
  render(){
    return(<div>Skills</div>)
  }
}

class Lifestyle extends React.Component{
  render(){
    return(<div>Lifestyle</div>)
  }
}

class About extends React.Component{
  render() {
    return(<div>About page</div>);
  }
};

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
            <h2 className="title">Application</h2>
          </section>
          <ul>
            <li><a href="#/about">About</a></li>
            <li><a href="#/skill">Skills</a></li>
            <li><a href="#/lifestyle">Lifestyle</a></li>
          </ul>
          <Child/>
        </div>
      )
  }
};

ReactDom.render(<App />,  document.getElementById("react"))
