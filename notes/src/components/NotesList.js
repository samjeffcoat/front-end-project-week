import React, { Component } from "react";
import axios from "axios";

class NotesList extends React.Component {
  state = {
    notes: []
  };
  render() {
    return (
      <div>
        <h2>Notes</h2>
        <ul>
          {this.state.notes.map(n => (
            <li key={n._id}>
              {n.title}
              {n.textBody}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://fe-notes.herokuapp.com/note/get/all").then(res => {
      this.setState({ notes: res.data });
    });
  }
}

export default NotesList;
