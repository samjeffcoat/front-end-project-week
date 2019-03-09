import React, { Component } from "react";
import axios from "axios";
import { Form, Input, Button } from "reactstrap";
import { withRouter } from "react-router-dom";

class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: " ",
      textBody: " "
    };
  }

  componentDidMount = () => {
    axios.get(`https://fe-notes.herokuapp.com/note/get/all`).then(res => {
      let notes = res.data;
      let note = notes.filter(note => {
        if (this.props.match.params.id === note.id) {
          return note;
        }
      })[0];
    });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editNote = e => {
    e.preventDefault();
    const id = this.props.match.id;
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
      <div>
        <Form onSubmit={this.editNote}>
          <Input
            onChange={this.handleChange}
            placeholder="Title"
            value={this.state.title}
            name="title"
          />
          <Input
            onChange={this.handleChange}
            placeholder="textbody"
            value={this.state.textBody}
            name="textbody"
          />
          <Button type="submit">Edit Note!</Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(EditNote);
