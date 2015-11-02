import React from 'react';

class About extends React.Component{
  render() {

    let aboutStyle={
      textAlign:'left'
    };

    return(
      <div className="view-content">
        <div className="content-title">
          <h2>Just a little <span className="bit-letters"> bit</span> about me...</h2>
        </div>
        <ul className="content non-style-list" style={aboutStyle}>
          <li>Name: Rodrigo Koga</li>
          <li>Age: 27</li>
          <li>Location: São Paulo, BR</li>
          <li>Education: (2008 – 2012) Bachelor of Computer Science - University of São Paulo</li>
          <li>Career: (2012 – 2015) Fullstack developer at Ícaro Tech (R&D) - helped develop the products <a href="http://www.icarotech.com/cala/en/advanced-dashboards-en/">Advanced Dashboards</a> and <a href="http://www.icarotech.com/cala/en/dash-analytics-en/">Dash Analytics</a></li>
          <li>Languages: Portuguese, English and Japanese</li>
          <li>Loves: Curry, Pepperoni, Beer, Coffee and Dogs</li>
        </ul>
      </div>
    );
  }
};

export default About;
