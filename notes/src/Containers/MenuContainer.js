import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  background: green;
  padding: 10px;
  justify-content: space-between;
  max-width: 880px;
`;

const MenuContainer = () => {
  return (
    <div>
      <div className="title">
        <h2>Sam's Notes</h2>
      </div>
      <ButtonContainer>
        <Link to={"/"}>
          <Button>View Your Notes</Button>
        </Link>
        <Link to={"/create-new"}>
          <Button>Create New Note</Button>
        </Link>
      </ButtonContainer>
    </div>
  );
};
export default MenuContainer;
