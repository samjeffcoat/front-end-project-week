import React, { Component } from "react";
import NoteContainer from "./Containers/NoteContainer";
import { Route, NavLink } from "react-router-dom";
import NotesList from "./Components/NotesList";
import EditNote from "./Components/EditNote";
import CreateNote from "./Components/CreateNote";
import Note from "./Components/Note";
import DeleteNote from "./Components/DeleteNote";

import "./App.css";
import axios from "axios";
class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: null,
      note: {
        title: " ",
        textBody: " "
      },
      isLoaded: false
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

  editNote = (note, id) => {
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
  editingNote = (note, id) => {
    this.editNote(note, id);
  };

  deleteNote = () => {
    const id = this.props.match.params.id;
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

  deletingNote = id => {
    this.deleteNote(id);
  };

  addNewNote = note => {
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
            &nbsp; |&nbsp;
            <NavLink to="/:id">Note</NavLink>
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
            render={props => (
              <EditNote
                {...props}
                note={this.state.note}
                editingNote={this.editingNote}
                handleInput={this.handleInput}
              />
            )}
          />
          <Route exact path="/:id" component={Note} />
        </main>
      </>
    );
  }
}
export default App;
