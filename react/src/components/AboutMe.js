import styled from "styled-components";

import Me from "./Me";
import Languages from "./Languages";

export default function AboutMe({ page }) {
  return (
    <Container isVisible={page}>
      <Me />
      <Languages />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  display: ${(props) => (props.isVisible === "aboutme" ? "flex" : "none")};
`;
