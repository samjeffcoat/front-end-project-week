import React, { Component } from "react";
import axios from "axios";
import { Form, Input, Button } from "reactstrap";
import { withRouter } from "react-router-dom";

class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      fetchedNote: {
        title: " ",
        textBody: " "
      }
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`
      )
      .then(res => this.setState({ fetchedNote: res.data, loading: false }))
      .catch(err =>
        this.setState({ loading: false, error: true, errorMsg: err.response })
      );
  }
  editNote = event => {
    event.preventDefault();
    let { title, textBody } = this.state.fetchedNote;
    let note = {
      title,
      textBody
    };
    axios
      .put(
        `http:s//fe-notes.herokuapp.com/note/${this.state.fetchedNote.id}`,
        note
      )
      .then(res => {
        this.props.receivedNewNote(res.data);
        this.props.history.push(`/note/${this.state.fetchedNote.id}`);
      })
      .catch(err => console.log(err.response));
    this.setState({
      title: " ",
      textBody: " "
    });
  };
  handleChange = e => {
    e.persist();
    this.setState(prevState => {
      return {
        fetchedNote: {
          ...prevState.fetchedNote,
          [e.target.name]: e.target.value
        }
      };
    });
  };
  render() {
    if (this.state.loading) {
      return <p>Loading....</p>;
    } else if (this.state.error) {
      return <p>We couldn't find your note to edit!</p>;
    } else {
      return (
        <div>
          <Form onSubmit={this.editNote}>
            <Input
              onChange={this.handleChange}
              placeholder="Title"
              value={this.state.fetchedNote.title}
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
}

export default withRouter(EditNote);
