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
    this.buttonClear = this.buttonClear.bind(this);

  }
 
  editorChange(event){
    this.setState({ input: event.target.value});
  }

  buttonClear(){
    this.setState({input: ""})
  }


  render(){
    return (
      <div id="container">
        <p className= "heading">Editor</p>
        <p className= "heading">Previewer</p>
        <Editor appstatechange= {this.editorChange} appinput = {this.state.input}/>
        <Previewer appinput = {this.state.input}/>
        <div className= "buttons">
        <button onClick= {this.buttonClear}><i class="fas fa-times-circle fa-3x"></i></button>
        </div>
        <div className= "buttons">
        <button onClick= {this.buttonClear}><i class="fas fa-times-circle fa-3x"></i></button>
        </div>
      </div> 
    );
  }
}
export default App;


let placeholder = `
# Heading number 1
## Heading number 2
### Heading number 3
#### ect.

<!--Italic-->
*This text* is italic

_This text_ is italic

<!--Strong-->
**This text** is strong

__This text__   is strong

<!--Strikethroug-->

~~This text~~ \n\nis strikethroug

<!--Horizontal rule-->

---
___

<!--Blockquote-->
>This is a quote

<!--Links-->
[Emir Uzunovic](http://www.hobbydev.com.ba/)

[Emir Uzunovic](http://www.hobbydev.com.ba/ "see my portfolio")

<!--UL-->
* item1
* item 2
    * nested 1
    * nested 2

<!--OL-->
1. item 1
1. item 2
1. item 3
1. item 4

<!--Inline Code Block-->
\`<p>This is a paragraph</p>\`

<!--Image-->
![Markdown Logo](https://markdown-here.com/img/icon256.png)

<!--GitHub Markdown-->
<!--Code Block-->
\`\`\`bash
npm instal 
npm start
\`\`\`

\`\`\`javascrip
function add(num1, num2){
    return num1 + num2;
}
\`\`\`

\`\`\`python
    def add(num1, num2):
    return num1 + num2
\`\`\`

<!--Tables-->
| Name     | Email          |
| -------- | -------------- |
| John Doe | john@gmail.com |
| Jane Doe | jane@gmail.com |

<!-- Task List -->
* [x] Task 1
* [x] Task 2
* [ ] Task 3
 `;