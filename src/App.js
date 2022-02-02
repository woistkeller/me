import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import api from "./api/api";

import styled from "styled-components";

import Home from "./components/Home";
import Bar from "./components/Bar";

import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Playground from "./components/Playground";
import NotFound from "./components/NotFound";

export default function App() {
  const [song, setSong] = useState("song");

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
        <Bar />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/playground" element={<Playground song={song} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
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

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;
