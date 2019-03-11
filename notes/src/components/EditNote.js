import React, { Component } from "react";
import { Form, Input, Button } from "reactstrap";
import MenuContainer from "../Containers/MenuContainer";
import axios from "axios";

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: " ",
      textBody: " "
    };
  }
  componentDidMount = () => {
    axios.get(`'https://fe-notes.herokuapp.com/note/get/all`).then(res => {
      let notes = res.data;
      let note = notes.filter(note => {
        if (this.props.match.params.id === note.id) {
          return note;
        }
      })[0];
    });
  };
  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editNote = e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const newNote = {
      title: this.state.title,
      textBody: this.state.textBody
    };
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, newNote)
      .then(res => this.setState({ notes: res.data }))
      .then(
        this.setState({
          title: " ",
          textBody: " ",
          id: this.props.id
        })
      )
      .then(() => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="edit-note-container">
        <MenuContainer />
        <h2>Edit Note: </h2>
        <Form onSubmit={this.editNote}>
          <Input
            onChange={this.handleChanges}
            placeholder=" Note Title"
            name="title"
            value={this.state.title}
          />
          <Input
            onChange={this.handleChanges}
            placeholder="Note Content"
            name="textbody"
            type="text"
            //value={this.state.textBody}
          />
          <Button type="submit" value="save">
            Edit Note!
          </Button>
        </Form>
      </div>
    );
  }
}
export default EditNote;
