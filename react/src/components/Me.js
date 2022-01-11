import styled from "styled-components";
import { Subtitle, Text, Button } from "./styles";

import Technologies from "./Technologies";

export default function Me() {
  return (
    <Container>
      <Subtitle>Technologies</Subtitle>
      <Text>
        I know everything. Well, not everything, but I am proficient and
        comfortable learning anything, thing that I love. I've digging React and Node,
        as their environment and, building amazing real projects that have given
        me <del>headaches, resilience and problem solving experience</del>{" "}
        pride.
      </Text>
      <Technologies />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 1rem;
  background-image: url("/60e32be45e4022360a25d5fc_Mesh 62.jpg");
  background-position: bottom right;
  background-size: cover;
`;