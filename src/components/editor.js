import React, { Component } from 'react';
// Problem was, <textarea> don't have Attribute to expand with content, it was set to be 100% of containing element.
// Containing element will expand along with element in his row which is previewer.
class Editor extends Component {
    render(){
      return(
        <div>
          <textarea id="inputtext" className= "main"  onChange= {this.props.appstatechange} value= {this.props.appinput} placeholder="Write your own markdown text"></textarea>
        </div> 
     );
    }
  }
  export default Editor;