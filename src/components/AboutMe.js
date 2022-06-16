import styled from "styled-components";
import { Title } from "./styles";

import Me from "./Me";
import Languages from "./Languages";
import Contact from "./Contact";

export default function AboutMe() {
  return (
    <Container>
      <Title style={{ color: "#141414" }}>
        5 years programming to internet
      </Title>
      <Me />
      {/* <Languages /> */}
      <Contact />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  height: 100%;
  margin: 1rem 0;
`;
