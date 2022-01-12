import FadeIn from "react-fade-in";

import styled from "styled-components";

import Me from "./Me";
import Languages from "./Languages";

export default function AboutMe({ page }) {
  return (
    <Container isVisible={page}>
      <FadeIn>
        <Me />
        <Languages />
      </FadeIn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`;
