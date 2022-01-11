import { useState } from "react";

import styled from "styled-components";
import { Button, Title } from "./styles";

import Me from "./Me";
import Spotify from "./Spotify";
import Lichess from "./Lichess";
import Languages from "./Languages";

export default function AboutMe({ page }) {
  const [isUselessVisible, setIsUselessVisible] = useState(false);

  return (
    <Container isVisible={page}>
      <Me />
      <Languages />
      <div>
        <Button
          noFill={true}
          style={{
            marginTop: "1rem",
            backgroundColor: "white",
            color: "#141414",
          }}
          onClick={() => {
            setIsUselessVisible(!isUselessVisible);
          }}
        >
          Useless Info
        </Button>
      </div>
      <UselessInfo isVisible={isUselessVisible}>
        <Title>Wellcome to my playground</Title>
        <Spotify />
        <Lichess />
      </UselessInfo>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  display: ${(props) => (props.isVisible === "aboutme" ? "flex" : "none")};
`;

const UselessInfo = styled.div`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: start;
  flex-direction: column;
`;
