import React from 'react';

class Skill extends React.Component{
  render(){
    return(
      <div className="view-content">
        <div className="content-title">
          <h2>My powerful skills</h2>
        </div>
        <ul className="content non-style-list">
          <li>NodeJS</li>
          <li>jQuery</li>
          <li>AngularJS</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>MongoDB</li>
          <li>Spring</li>
        </ul>
      </div>
    )
  }
}

export default Skill;
