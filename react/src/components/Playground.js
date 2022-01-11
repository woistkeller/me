import styled from "styled-components";
import { Title } from "./styles";

import Spotify from "./Spotify";
import Lichess from "./Lichess";

export default function Playground({ page }) {
  return (
    <Container isVisible={page}>
      <Title style={{ color: "white" }}>Welcome to my playground</Title>
      <Spotify />
      <Lichess />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  display: ${(props) => (props.isVisible === "playground" ? "flex" : "none")};
`;
