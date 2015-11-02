import React from 'react';

class Contact extends React.Component{
  render(){

    return(
      <div className="view-content">
        <div className="content-title">
          <h2>Let&#39;s have a beer!</h2>
        </div>
        <div className="row mail-me">
          <a className="btn clickable-content" href="mailto:koga.rodrigo@gmail.com">
            <i className="fa fa-paper-plane fa-5x"></i>
            <label>koga.rodrigo@gmail.com</label>
          </a>
        </div>
        <div className="row">
          <div className="four columns">
            <a className="btn clickable-content" href="https://github.com/rokoala" target="_top">
              <i className="fa fa-github fa-5x"></i>
              <label>Github</label>
            </a>
          </div>
          <div className="four columns">
            <a className="btn clickable-content" href="http://www.facebook.com/rodrigo.koga" target="_top">
              <i className="fa fa-facebook-square fa-5x"></i>
              <label>Facebook</label>
            </a>
          </div>
          <div className="four columns">
            <a className="btn clickable-content" href="https://br.linkedin.com/pub/rodrigo-koga/85/105/a49" target="_top">
              <i className="fa fa-linkedin fa-5x"></i>
              <label>LinkedIn</label>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
