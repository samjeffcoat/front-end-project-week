import React from "react";
import axios from "axios";
import CardComponent from "./CardComponent";
import MenuContainer from "../Containers/MenuContainer";

import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: #f2f1f2;
`;
const NoteViewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
const OptionsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  height: 100px;
  padding-right: 10px;
`;

const ListOptions = styled.div`
  display: flex;
  margin-left: 5px;
  flex-wrap: wrap;
  list-style-type: none;
  height: 30px;
`;

const Options = styled.li`
  display: flex;
  margin-left: 5px;
  height: 5px;
  cursor: pointer;
`;
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: []
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }
  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState({ note: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteNote = () => {
    const id = this.props.match.params.id;
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(res => {
        this.setState({ notes: res.data });
      })
      .then(() => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };
  render() {
    if (!this.state.note) {
      return <div> Loading</div>;
    }
    return (
      <Container>
        <MenuContainer />
        <NoteViewContainer>
          <OptionsContainer>
            <ListOptions>
              <Options>
                <StyledLink to={`/edit/${this.props.match.params.id}`}>
                  Edit
                </StyledLink>
              </Options>
              <Button color="danger" onClick={this.deleteNote}>
                Delete
              </Button>
            </ListOptions>
          </OptionsContainer>
          <CardComponent
            note={this.state.note}
            noteView={this.state.noteView}
          />
        </NoteViewContainer>
      </Container>
    );
  }
}
export default Note;
