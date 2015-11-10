import React from 'react';
import ReactDom from 'react-dom';
import Type from '../utils/Type.js'

class Home extends React.Component{
  render(){
    return(
      <div className="view-content">
        <div className="content-title">
          <h1 className="title"><Type timeout='120' text="Hello! I'm Rodrigo Koga!"/><span className="blink">|</span></h1>
        </div>
        <div className="content">Full-stack Web Developer living in São Paulo, Brazil. <br/>Passionate about new technologies, arts and running.</div>
      </div>
    )
  }
}

export default Home;
