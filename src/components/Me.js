import styled from "styled-components";
import { Subtitle, Text } from "./styles";

import Technologies from "./Technologies";

export default function Me() {
  return (
    <Container>
      <Subtitle>Technologies</Subtitle>
      <Text>
        I know everything. Well, not everything, but I am proficient and
        comfortable learning anything, thing that I love. I've digging React and
        Node, as their environment and, building amazing real projects that have
        given me <del>headaches, resilience and problem solving experience</del>{" "}
        pride.
      </Text>
      <Technologies />
      <Text>
        I get bored easly, so I'm looking for challenges(always :D), that'll
        remain my motivation and help my evolution in my path to web developer
        and software engineering seniority.
      </Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 1rem;
  background-image: url("/royal-blue-Presentation-Gradient-Background.jpg");
  background-position: bottom right;
  background-size: cover;
`;
