import React, { Component } from "react";
import NoteContainer from "./Containers/NoteContainer";
import { Route } from "react-router-dom";
import EditNote from "./Components/EditNote";
import CreateNote from "./Components/CreateNote";
import Note from "./Components/Note";

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
      .then(res => {
        console.log(res.data);
        this.setState({ notes: res.data, isLoaded: true });
      })
      .catch(err => console.log(err.response));
  }

  handleInput = event => {
    event.preventDefault();
    this.setState({
      note: { ...this.state.note, [event.target.name]: event.target.value }
    });
  };
  render() {
    return (
      <div className="app-container">
        <Route
          exact
          path="/"
          render={props => (
            <NoteContainer {...props} notes={this.state.notes} />
          )}
        />
        <Route
          path="/note/:id"
          render={props => <Note {...props} deleteNote={this.deleteNote} />}
        />
        <Route
          path="/create-new"
          render={props => <CreateNote {...props} newNote={this.addNewNote} />}
        />
        <Route
          path="/edit/:id"
          render={props => <EditNote {...props} notes={this.state.notes} />}
        />
      </div>
    );
  }
}
export default App;
