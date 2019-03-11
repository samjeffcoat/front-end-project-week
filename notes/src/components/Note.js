import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: []
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }
  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState({ note: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteNote = () => {
    this.props.deleteNote(this.props.match.params.id);
    this.props.history.push("/");
  };
  render() {
    return (
      <fragment>
        <div>
          <div class="note-view">
            <Button color="primary">
              <NavLink to={`/edit/${this.props.match.params.id}`}>Edit</NavLink>
            </Button>
            <Button color="danger" onClick={this.deleteNote}>
              Delete!
            </Button>
          </div>
          <h1>{this.state.note.title}</h1>
          <p>{this.state.note.textBody}</p>
        </div>
      </fragment>
    );
  }
}
export default Note;
