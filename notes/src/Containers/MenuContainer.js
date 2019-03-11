import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
const MenuContainer = () => {
  return (
    <div>
      <div className="title">
        <h2>Sam's Notes</h2>
      </div>
      <div className="button-container">
        <Link to={"/"}>
          <Button>View Your Notes</Button>
        </Link>
        <Link to={"/create-new"}>
          <Button>Create New Note</Button>
        </Link>
      </div>
    </div>
  );
};
export default MenuContainer;
