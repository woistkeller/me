import styled from "styled-components";
import { Subtitle } from "./styles";

import { FaReact, FaNodeJs, FaVuejs } from "react-icons/fa";
import { SiNextdotjs, SiFlask } from "react-icons/si";
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
        <Tag experience="interest">
          <SiNextdotjs />
          Next
        </Tag>
        <Tag experience="interest">
          <FaVuejs />
          Vue.js
        </Tag>
        <Tag experience="some">
          <DiPhp />
          PHP
        </Tag>
        <Tag experience="interest">
          <SiFlask />
          Python
        </Tag>
        <Tag experience="some">
          <FaReact />
          React Native
        </Tag>
        <Tag experience="interest">Remix</Tag>
        <Tag experience="interest">C++ (may Linus bless us)</Tag>
      </Tags>
      <div style={{ marginTop: "0.5rem" }}>
        <Subtitle>
          <Dot color="good" />
          Good knowledge
        </Subtitle>
        <Subtitle>
          <Dot color="some" />
          Some experience
        </Subtitle>
        <Subtitle>
          <Dot color="interest" />
          Interest
        </Subtitle>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  border: 1px solid white;
  background-color: ${(props) => props.experience === "good" && "#85d47f"};
  background-color: ${(props) => props.experience === "some" && "#f79c5c"};
  background-color: ${(props) => props.experience === "interest" && "#8ac1d1"};
  color: #141414;
  font-weight: bold;

  border-radius: 5px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin-left: 0.5rem;
  border-radius: 50%;
  border: 1px solid black;
  box-shadow: 0 0 15px #1db954;
  margin-right: 0.5rem;

  background-color: ${(props) => props.color === "good" && "#85d47f"};
  background-color: ${(props) => props.color === "some" && "#f79c5c"};
  background-color: ${(props) => props.color === "interest" && "#8ac1d1"};
`;
