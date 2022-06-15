import styled from "styled-components";
import { Subtitle, Text } from "./styles";

import Technologies from "./Technologies";

export default function Me() {
  return (
    <Container>
      <Subtitle>Technologies</Subtitle>
      <Content>
        <Left>
          <Text>
            I know everything. Well, not everything, but I am proficient and
            comfortable learning anything. I've been digging into React and
            Node, as their environment and framewokers, building amazing real
            projects that gave me (headache, resilience and problems-solving
            experience) pride. I learn, I apply.
          </Text>
          <Text>
            I get bored easily, so I'm looking for challenges (always :D), that
            keep my motivation up and help my evolution on my way to expertise
            in web development.
          </Text>
          <Image src="/laptop.png" />
        </Left>
        <Technologies />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 1rem;
  background-image: url("blue.png");
  background-position: center center;
  background-size: cover;
`;

const Content = styled.div`
  display: flex;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  height: 250px;
  width: 250px;
  transform: scaleX(-1);
`;

const Left = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;
