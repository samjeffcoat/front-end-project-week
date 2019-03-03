import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import axios from 'axios';





class App extends Component {
  constructor(){
    super();
    this.state={
      notes:[],
      note:{
        tags : ' ',
        _id: ' ',
        title: ' ',
        textBody: ' ',
        __v: ' '
      }
    }
  }
  componentDidMount() {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => this.setState({ items: response.data}))
    .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
<h1>Sam's note app</h1>
      </div>
    );
  }

}

export default App;
