import React, { Component } from "react";
import axios from "axios";
import { Form, Input, Button } from "reactstrap";

class CreateNote extends Component {
  constructor() {
    super();
    this.state = {
      title: " ",
      textBody: " "
    };
  }

  addNewNote = e => {
    e.preventDefault();
    axios
      .post("https://fe-notes.herokuapp.com/note/create", this.state)
      .then(res => {
        this.setState({ notes: res.data });
      })
      .then(() => {
        this.props.history.push("/");
      });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Form>
        <h2>Create New Note!</h2>
        <Input
          onChange={this.handleInputChange}
          placeholder="Title"
          name="title"
          value={this.state.title}
        />
        <Input
          type="textarea"
          onChange={this.handleInputChange}
          placeholder="Text Body"
          name="textBody"
          value={this.state.textBody}
        />
        <br />
        <Button onClick={this.addNewNote}>Save</Button>
      </Form>
    );
  }
}

export default CreateNote;
