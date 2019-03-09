import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button } from "reactstrap";
import Axios from "axios";

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: " ",
      textBody: " "
    };
  }

  addNote = () => {
    Axios.post(`https://fe-notes.herokuapp.com/note/create`, this.state)
      .then(res => {
        this.setState({ notes: res.data });
      })
      .then(() => {
        this.props.history.push("/");
      });
  };

  handleInputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Form>
        <Input
          onChange={this.handleInputChange}
          placeholder="Title"
          name="title"
          type="text"
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
        <Button onClick={this.addNote}>Save</Button>
      </Form>
    );
  }
}

export default withRouter(CreateNote);
