import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Previewer extends Component {
    render(){
      return(
        <ReactMarkdown source = {this.props.appinput}/>
      );
    }
  }
  export default Previewer;