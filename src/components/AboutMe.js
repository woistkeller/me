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
        <Title>5 years programming to internet</Title>
        <Me />
        <Languages />
        <Contact />
      </FadeIn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
