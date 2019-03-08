import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import NotesList from "./components/NotesList";
import "./App.css";
import CreateNote from "./components/CreateNote";

class App extends Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/notes-list">All Notes</NavLink>
            &nbsp; |&nbsp;
            <NavLink to="/addnote">Add New Note</NavLink>
          </nav>
        </header>
        <main>
          <Route path="/notes-list" component={NotesList} />
          <Route path="/addnote" component={CreateNote} />
        </main>
      </>
    );
  }
}

export default App;
