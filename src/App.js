import { useState, useEffect } from "react";

import api from "./api/api";

import styled from "styled-components";

import Header from "./components/Header";
import Bar from "./components/Bar";

import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Playground from "./components/Playground";

export default function App() {
  const [page, setPage] = useState("projects");
  const [song, setSong] = useState("song");

  //calling the api on a component that is never unmonted, to avoid multiple api requests.
  //It was my best solution. Context api would be good. But an absolute overkill
  useEffect(() => {
    (async function () {
      setSong(await api.spotifyGet());
    })();
  }, []);

  var settingPage = (e) => {
    setPage(e);
  };

  return (
    <Container>
      <Box>
        <Header />
        <Bar settingPage={settingPage} page={page} />
        {page === "projects" && <Projects />}
        {page === "aboutme" && <AboutMe />}
        {page === "playground" && <Playground song={song} />}
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
  background: linear-gradient(90deg, #141414 21px, transparent 1%) center,
    linear-gradient(#141414 21px, transparent 1%) center, white;
  background-size: 22px 22px;
`;

const Box = styled.div`
  display: block;

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  max-width: 1000px;
  width: 100%;
  height: 100%;
  padding: 1rem;

  @media only screen and (max-width: 500px) {
    padding: 0.5rem;
  }
`;
