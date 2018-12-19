import React, { Component } from 'react';
import './App.css';
import Previewer from './components/previewer'
import Editor from './components/editor'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: placeholder
    };
    this.editorChange = this.editorChange.bind(this);
  }
 
  editorChange(event){
    this.setState({ input: event.target.value});
  }

  render(){
    return (
      <div>
      <Previewer appinput = {this.state.input}/>
      <Editor appstatechange= {this.editorChange} appinput = {this.state.input}/>
      </div>
    );
  }
}
export default App;

let placeholder = "# This is header1\n\n## This is header2\n\n### This is header3";
