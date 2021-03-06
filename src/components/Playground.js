import FadeIn from "react-fade-in";

import styled from "styled-components";
import { Title } from "./styles";

import Spotify from "./Spotify";
import Lichess from "./Lichess";

export default function Playground({ song }) {
  return (
    <Container>
      <FadeIn>
        <Title>This is my playground</Title>
        <Title>Here I play with some APIS</Title>
        <Spotify song={song} />
        <Lichess />
      </FadeIn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  height: 100%;

  * {
    text-shadow: none;
  }
`;
