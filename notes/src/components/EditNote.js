import React, { Component } from "react";
import { Form, Input } from "reactstrap";
import MenuContainer from "../Containers/MenuContainer";
import axios from "axios";
import styled from "styled-components";

const EditButton = styled.button`
background: red,
border-radius: 3px;
border: 2px solid white;
color: red;
margin 0.5em 1em;
padding: 0.25em 1em;
`;

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
      });
    });
  };
  handleInputChange = e => {
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
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}/`, newNote)
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
            onChange={this.handleInputChange}
            placeholder=" Note"
            name="title"
            value={this.state.title}
          />
          <Input
            type="textarea"
            onChange={this.handleInputChange}
            placeholder="Note Content"
            name="textBody"
            value={this.state.textBody}
          />
          <EditButton type="submit">Edit Note!</EditButton>
        </Form>
      </div>
    );
  }
}
export default EditNote;
