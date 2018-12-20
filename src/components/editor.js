import React, { Component } from 'react';

class Editor extends Component {
    render(){
      return(
        <div>
          <textarea id="inputtext" className= "main" rows='2' cols='20'  onChange= {this.props.appstatechange} value= {this.props.appinput} placeholder="Write your own markdown text"></textarea>
        </div> 
     );
    }
  }
  export default Editor;