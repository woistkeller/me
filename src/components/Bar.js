import { Link, useLocation } from "react-router-dom";

import styled from "styled-components";

export default function Bar() {
  const page = useLocation().pathname;
  //it's a kinda ugly in small screens, improve later
  return (
    <Container>
      <Button color="#f69e37" to="/" selected={page === "/" ? false : true}>
        Home
      </Button>
      <Button
        color="#ad50fa"
        to="/projects"
        selected={page === "/projects" ? false : true}
      >
        Projects
      </Button>
      <Button
        color="#0b2545"
        to="/about"
        selected={page === "/about" ? false : true}
      >
        About me
      </Button>
      <Button
        color="#fdaa88"
        to="/playground"
        selected={page === "/playground" ? false : true}
      >
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
  background: #141414;
  border-radius: 7px;
  max-width: 1200px;
  margin-bottom: 1rem;
  padding: 0 0.3rem;

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
  font-weight: 300;
  color: white;
  font-family: "IBM Plex Mono", monospace;
  text-decoration: none;

  padding: ${(props) => (props.selected ? "none" : "0.4rem 1.3rem")};
  margin: ${(props) => (props.selected ? "none" : "0.3rem 0")};
  font-size: 1rem;
  border-radius: 7px;
  outline: none;
  border: none;

  background: ${(props) => (props.selected ? "none" : props.color)};
  color: ${(props) => (props.selected ? "white" : "#141414")};
  color: ${(props) => props.color === "#0b2545" && "white"};

  transition: all 300ms ease-in-out;
  word-break: break-all;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 400px) {
    padding: 0.4rem 0.3rem;
    font-size: 0.7rem;
  }
`;
