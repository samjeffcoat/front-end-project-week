import React from "react";
import { Button } from "reactstrap";
const DeleteNote = props => {
  return (
    <div>
      <h2>Are you sure you want to delete this?</h2>
      <div>
        <Button onClick={props.deleteNote}>Yes, Delete</Button>
        <Button on Click={props.dontDelete}>
          No, Dont!
        </Button>
      </div>
    </div>
  );
};
