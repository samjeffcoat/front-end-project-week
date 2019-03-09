import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import NotesList from "./components/NotesList";

import "./App.css";
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote";
import Axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }
  componentDidMount() {
    Axios.get("https://fe-notes.herokuapp.com/note/get/all")
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err.response));
  }

  addNewNote = note => {
    Axios.post("https://fe-notes.herokuapp.com/note/create", note)
      .then(res => {
        this.setState(prevState => ({
          notes: [...prevState.notes, note]
        }));
      })
      .catch(err => console.log(err));
  };
  addNote = note => {
    this.addNewNote(note);
  };
  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/notes-list">All Notes</NavLink>
            &nbsp; |&nbsp;
            <NavLink to="/addnote">Add New Note</NavLink>
            &nbsp; |&nbsp;
            <NavLink to="/edit/:id">Edit Note</NavLink>
          </nav>
        </header>
        <main>
          <Route
            path="/notes-list"
            render={props => <NotesList {...props} notes={this.state.notes} />}
          />
          <Route
            path="/addnote"
            render={props => <CreateNote {...props} newNote={this.addNote} />}
          />
          <Route
            exact
            path="/edit/:id/"
            render={props => <EditNote {...props} notes={this.state.notes} />}
          />
        </main>
      </>
    );
  }
}
export default App;
