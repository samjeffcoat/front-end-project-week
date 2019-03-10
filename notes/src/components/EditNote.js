import React, { Component } from "react";
import { Form, Input, Button } from "reactstrap";


const EditNote = props => {
  const EditingNotes = event => {
    event.preventDefault();
    props.editingNote(props.note, props.match.params.id);
    props.history.push("/");
  };
  return (
    <div>
      <h2>Edit Note: </h2>
      <Form onSubmit={EditingNotes}>
        <Input
          onChange={props.handleInput}
          placeholder="Title"
          name="title"
          type="text"
        />
        <Input
          onChange={props.handleInput}
          placeholder="textbody"
          name="textbody"
          type="text"
        />
        <Button type="submit" value="save">
          Edit Note!
        </Button>
      </Form>
    </div>
  );
};

export default EditNote;
