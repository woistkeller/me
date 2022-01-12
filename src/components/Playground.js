import styled from "styled-components";
import { Title } from "./styles";

import FadeIn from "react-fade-in";

import Spotify from "./Spotify";
import Lichess from "./Lichess";

export default function Playground({ page }) {
  return (
    <Container isVisible={page}>
      <FadeIn>
        <Title style={{ color: "#141414" }}>Welcome to my playground</Title>
        <Spotify />
        <Lichess />
      </FadeIn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
