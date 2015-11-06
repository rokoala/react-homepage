import React from 'react';

class Type extends React.Component{

  render(){
    return (<span>{this.displayText}</span>)
  }

  constructor(props){
    super(props);
    this.delay = props.delay || 0;
    this.text = props.text;
    this.timeout = props.timeout;
    this.aText = this.text.split('');
    this.displayText="";
    this.index = 0;
  }

  componentDidMount(){
    let self = this;
    setTimeout(function () {
      let typing = setInterval(function () {
        if(self.index >= self.aText.length - 1)
          clearInterval(typing);

        self.displayText += self.aText[self.index++];
        self.forceUpdate();
      },self.timeout);
    },self.delay);
  }

}

export default Type;
