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
  /* Moved to edit note
  editNoteFromServer = (note, id) => {
    axios
      .put(`http://fe-notes.herokuapp.com/note/edit/${id}`, note)
      .then(res => {
        this.setState(currentState => {
          let newNote = currentState.notes.map(item => {
            if (item.id === id) {
              return res.data;
            } else {
              return item;
            }
          });
          return { notes: newNote };
        });
        axios.get(`https://fe-notes.herokuapp.com/note/get/all`).then(res => {
          this.setState({
            notes: res.data,
            isLoaded: true
          });
        });
      })
      .catch(err => console.log(err));
  };
  editNote = (note, id) => {
    this.editNoteFromServer(note, id);
  };
/* Moved to Note View
  deleteNoteFromServer = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(res => {
        console.log("res.data:", res.data);
        axios.get("https://fe-notes.herokuapp.com/note/get/all").then(res => {
          this.setState({
            notes: res.data,
            isLoaded: true
          });
        });
      })
      .catch(err => console.log(err));
  };

  deleteNote = id => {
    this.deleteNoteFromServer(id);
  };
*/
  addNewNoteToServer = note => {
    axios
      .post("https://fe-notes.herokuapp.com/note/create", note)
      .then(res => {
        this.setState(prevState => ({
          notes: [...prevState.notes, note]
        }));
      })
      .catch(err => console.log(err));
  };
  addNote = note => {
    this.addNewNoteToServer(note);
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
