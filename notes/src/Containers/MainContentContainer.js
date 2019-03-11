import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../Components/CardComponent";

const MainContent = props => {
  requestAnimationFrame(
    <div>
      <div class="title">
        <h3>Your Notes: </h3>
        <div className="notes-container">
          {props.notes ? (
            props.notes.map(note => (
              <Link to={`/note/${note._id}`} key={note._id}>
                <Card key={note._id} note={note} />
              </Link>
            ))
          ) : (
            <div>loading</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
