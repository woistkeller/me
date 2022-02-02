import FadeIn from "react-fade-in";

import styled from "styled-components";
import { Title } from "./styles";

import Me from "./Me";
import Languages from "./Languages";
import Contact from "./Contact";

export default function AboutMe() {
  return (
    <Container>
      <FadeIn>
        <Title style={{ background: "#141414a1" }}>5 years programming to internet</Title>
        <Me />
        <Languages />
        <Contact />
      </FadeIn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  height: 100%;
`;
