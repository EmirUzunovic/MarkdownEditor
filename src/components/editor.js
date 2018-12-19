import React, { Component } from 'react';

class Editor extends Component {
    render(){
      return(
        <div>
          <textarea onChange= {this.props.appstatechange} value= {this.props.appinput}></textarea>
        </div>
      );
    }
  }
  export default Editor;