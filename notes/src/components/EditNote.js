import React, { Component } from "react";
import { Form, Input, Button } from "reactstrap";
import MenuContainer from "../Containers/MenuContainer";

const EditNote = props => {
  const EditNotes = event => {
    event.preventDefault();
    props.editNote(props.note, props.match.params.id);
    props.history.push("/");
  };
  return (
    <div className="edit-note-container">
      <MenuContainer />
      <h2>Edit Note: </h2>
      <Form onSubmit={EditNotes}>
        <Input
          onChange={props.handleInput}
          placeholder=" Note Title"
          name="title"
          type="text"
        />
        <Input
          onChange={props.handleInput}
          placeholder="Note Content"
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
