import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Previewer extends Component {
    render(){
      return(
        <div>
        <ReactMarkdown className= "main" source = {this.props.appinput}/>
        </div>
      );
    }
  }
  export default Previewer;