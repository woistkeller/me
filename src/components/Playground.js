import FadeIn from "react-fade-in";

import styled from "styled-components";
import { Title } from "./styles";

import Spotify from "./Spotify";
import Lichess from "./Lichess";

export default function Playground({ song }) {
  return (
    <Container>
      <FadeIn>
        <Title>Welcome to my playground</Title>
        <Title>Here I play with some APIS</Title>
        <Spotify song={song} />
        <Lichess />
      </FadeIn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  * {
    text-shadow: none;
  }
`;
