import styled from "styled-components";
import { Subtitle, Text } from "./styles";

import Technologies from "./Technologies";

export default function Me() {
  return (
    <Container>
      <Subtitle>Technologies</Subtitle>
      <Text>
        I know everything. Well, not everything, but I am proficient and
        comfortable learning anything. I've been digging into React and Node,
        like their environment and framewokers, building amazing real projects
        that gave me (headache, resilience and problems-solving experience)
        pride.
      </Text>
      <Technologies />
      <Text>
        I get bored easily, so I'm looking for challenges(always :D), that will
        keep my motivation up and help my evolution on my way to expertise in
        web development.
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
  background: linear-gradient(170deg, #514da2, #423f84a1);
  background-position: bottom right;
  background-size: cover;
  margin-top: 1rem;
`;
