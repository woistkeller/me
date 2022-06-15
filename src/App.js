import { useState, useEffect } from "react";

import api from "./api/api";

import styled from "styled-components";

import Home from "./components/Home";

import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Playground from "./components/Playground";
import End from "./components/End";

export default function App() {
  const [song, setSong] = useState();

  //calling the api on a component that is never unmonted, to avoid multiple api requests.
  //It was my best solution. Context api would be good. But an absolute overkill
  useEffect(() => {
    (async function () {
      setSong(await api.spotifyGet());
    })();
  }, []);

  return (
    <Container>
      <Box>
        <Home />
        <Projects />
        <AboutMe />
        <Playground song={song} />
        <End />
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(90deg, white 21px, transparent 1%) center,
    linear-gradient(white 21px, transparent 1%) center, #141414;
  background-size: 22px 22px;

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  padding: 1rem;

  @media only screen and (max-width: 500px) {
    padding: 0.5rem;
  }
`;
