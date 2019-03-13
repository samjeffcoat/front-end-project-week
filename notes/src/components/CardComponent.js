import React from "react";
import styled from "styled-components";

const CardContainer = styled.section`
  display: flex;
  justify-content: center;
  border: 1px solid-black;
  max-width: 50%;
`;

const CardContainerMain = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid-black;
  max-width: 50%;
`;
const TitleContainer = styled.div`
  background: red;
`;

const TitleContainerMain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Title = styled.h2`
  display: flex;
  font-size: 1.6em;
`;
const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  word-break: break-word;
`;
const Body = styled.p`
  display: flex;
`;

const Card = props => {
  if (props.noteView) {
    return (
      <CardContainer>
        <TitleContainer>
          <h2>{props.note.title}</h2>
        </TitleContainer>
        <div className="text-containter">
          <p>{props.note.textBody}</p>
        </div>
      </CardContainer>
    );
  }
  return (
    <CardContainerMain>
      <TitleContainerMain>
        <Title>{props.note.title}</Title>
      </TitleContainerMain>
      <BodyContainer>
        <Body>{props.note.textBody}</Body>
      </BodyContainer>
    </CardContainerMain>
  );
};

export default Card;
