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

  addNote = ev => {
    ev.preventDefault();
    this.props.newNote(this.state.note);
    this.props.history.push("/");
  };

  handleInputChange = e => {
    e.preventDefault();
    this.setState({
      note: { ...this.state.note },
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Form onSubmit={this.addNote}>
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
        <Button type="submit" value="save">
          Save
        </Button>
      </Form>
    );
  }
}

export default CreateNote;
