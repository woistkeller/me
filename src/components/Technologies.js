import styled from "styled-components";
import { Subtitle, Text } from "./styles";

import { FaReact, FaNodeJs, FaVuejs } from "react-icons/fa";
import { SiNextdotjs, SiFlask, SiTypescript } from "react-icons/si";
import { DiPhp } from "react-icons/di";

export default function Technologies() {
  return (
    <Container>
      <Tags>
        <Tag experience="good">
          <FaReact />
          React
        </Tag>
        <Tag experience="good">
          <FaNodeJs />
          Node
        </Tag>
        <Tag experience="some">
          <SiNextdotjs />
          Next
        </Tag>
        <Tag experience="some">
          <DiPhp />
          PHP
        </Tag>
        <Tag experience="some">
          <FaReact />
          React Native
        </Tag>
        <Tag experience="interest">
          <FaVuejs />
          Vue.js
        </Tag>
        <Tag experience="interest">
          <SiFlask />
          Python
        </Tag>
        <Tag experience="interest">
          <SiTypescript />
          Typescript
        </Tag>
        <Tag experience="interest">Remix</Tag>
        <Tag experience="interest">C++</Tag>
        <Tag experience="interest">Anything</Tag>
      </Tags>
      <div style={{ marginTop: "0.5rem" }}>
        <Color color="good">Green</Color>
        <Subtitle>Good knowledge</Subtitle>
        <Color color="some"> Orange</Color>
        <Subtitle>Some experience</Subtitle>
        <Color color="interest">Blue</Color>
        <Subtitle>Interest</Subtitle>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #141414;
  border-radius: 10px;
`;

const Tags = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;

  * {
    margin-right: 0.5rem;
  }
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  padding: 0.05rem 0.5rem;
  background-color: ${(props) => props.experience === "good" && "#85d47f"};
  background-color: ${(props) => props.experience === "some" && "#f79c5c"};
  background-color: ${(props) => props.experience === "interest" && "#8ac1d1"};
  color: #141414;
  font-weight: bold;

  border-radius: 5px;
`;

const Color = styled(Text)`
  width: 10px;
  height: 10px;
  text-shadow: 0 0 15px #1db954;
  margin: 0.5rem 0;

  color: ${(props) => props.color === "good" && "#85d47f"};
  color: ${(props) => props.color === "some" && "#f79c5c"};
  color: ${(props) => props.color === "interest" && "#8ac1d1"};
`;
