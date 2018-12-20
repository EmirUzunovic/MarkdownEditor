import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
//React Markdown was imported to enable markdown to html transition
//Source of markdown is textarea value
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