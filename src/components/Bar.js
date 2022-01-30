import { Link, useLocation } from "react-router-dom";

import styled from "styled-components";

export default function Bar() {
  const page = useLocation().pathname;
  //it's a kinda ugly in small screens, improve later
  return (
    <Container>
      <Button to="/" selected={page === "/" ? false : true}>
        Home
      </Button>
      <Button to="/projects" selected={page === "/projects" ? false : true}>
        Projects
      </Button>
      <Button to="/about" selected={page === "/about" ? false : true}>
        About me
      </Button>
      <Button to="/playground" selected={page === "/playground" ? false : true}>
        Playground
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  margin-top: 0.5rem;
  background-color: #141414;
  max-width: 1200px;
  margin-bottom: 1rem;

  > * {
    width: 100%;
    margin: 0 0.5rem;
    color: white;
  }

  @media only screen and (max-width: 400px) {
    margin: 0 0.1rem;
  }
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  font-weight: bold;
  color: white;
  font-family: "Helvetica Neue", "Roboto", sans-serif;

  padding: ${(props) => (props.selected ? "none" : "0.4rem 1.3rem")};
  margin: ${(props) => (props.selected ? "none" : "0.3rem 0")};
  font-size: 1rem;
  border-radius: 7px;
  outline: none;
  border: none;

  background: ${(props) => (props.selected ? "none" : "#f69e37")};
  color: ${(props) => (props.selected ? "white" : "#141414")};

  transition: all 300ms ease-in-out;
  word-break: break-all;

  @media only screen and (max-width: 400px) {
    padding: 0.4rem 0.3rem;
    font-size: 0.7rem;
  }
`;
