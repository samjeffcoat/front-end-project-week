import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import NotesList from "./components/NotesList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/notes-list">All Notes</NavLink>
            &nbsp; |&nbsp;
          </nav>
        </header>
        <main>
          <Route path="/notes-list" component={NotesList} />
        </main>
      </>
    );
  }
}

export default App;
