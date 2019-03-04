import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import NotesList from "./components/NotesList";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <h1>Sam's note app</h1>
        <Route
          exact
          path="/notes-list"
          render={props => <NotesList {...props} notes={this.state.notes} />}
        />
      </div>
    );
  }
}

export default App;
