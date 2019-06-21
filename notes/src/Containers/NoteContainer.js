import React from "react";
import MainContent from "./MainContentContainer";
import MenuContainer from "./MenuContainer";

const NoteContainer = props => {
  return (
    <div>
      <MenuContainer />
      <MainContent notes={props.notes} />
    </div>
  );
};
export default NoteContainer;
