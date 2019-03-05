import React from "react";
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

  addNote = ev => {
    ev.preventDefault();
    const newNote = {
      title: this.state.title,
      textBody: this.state.textBody
    };
    axios
      .post("https://fe-notes.herokuapp.com/note/create", newNote)
      .then(res => {
        console.log(res.data);
        this.props.addNote(res.data);
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Form>
        <Input
          onChange={this.handleInputChange}
          placeholder="Title"
          name="title"
          value={this.state.title}
        />
        <Input
          type="textbody"
          onChange={this.handleInputChange}
          placeholder="Text Body"
          name="textBody"
          value={this.state.textBody}
        />
        <br />
        <Button onClick={this.newNote}>Save</Button>
      </Form>
    );
  }
}

export default CreateNote;
