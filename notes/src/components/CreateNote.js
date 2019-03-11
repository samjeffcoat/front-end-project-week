import React, { Component } from "react";

import { Form, Input, Button } from "reactstrap";

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        title: " ",
        textBody: " "
      }
    };
  }

  addNewNote = e => {
    e.preventDefault();
    this.props.newNote(this.state.note);
    this.props.history.push("/");
  };

  handleInputChange = e => {
    e.preventDefault();
    this.setState({
      note: { ...this.state.note, [e.target.name]: e.target.value }
    });
  };

  render() {
    return (
      <Form>
        <h2>Create New Note!</h2>
        <Input
          onChange={this.handleInputChange}
          placeholder="Title"
          name="title"
          type="text"
        />
        <Input
          type="textbody"
          onChange={this.handleInputChange}
          placeholder="Text Body"
          name="textBody"
        />
        <br />
        <Button onClick={this.addNewNote}>Save</Button>
      </Form>
    );
  }
}

export default CreateNote;
