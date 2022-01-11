import styled from "styled-components";

import { FaReact, FaNodeJs, FaVuejs, FaPython } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { DiPhp } from "react-icons/di";

export default function Technologies() {
  return (
    <Container>
      <Stack experience="good">
        <FaReact size="50" />
      </Stack>
      <Stack experience="good">
        <FaNodeJs size="50" />
      </Stack>
      <Stack experience="interest-some">
        <DiPhp size="50" />
      </Stack>
      <Stack experience="interest">
        <SiNextdotjs size="50" />
      </Stack>
      <Stack experience="interest">
        <FaVuejs size="50" />
      </Stack>
      <Stack experience="interest">
        <Icon alt="" src="/remix.png" />
      </Stack>
      <Stack experience="interest">
        <FaPython size="50" />
      </Stack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Stack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) =>
    props.experience === "good" ? "rgb(148, 255, 110)" : null};
  background-color: ${(props) =>
    props.experience === "interest" ? "rgb(103, 201, 240)" : null};
  background: ${(props) =>
    props.experience === "interest-some"
      ? "linear-gradient(35deg, rgb(103, 201, 240) 30%, rgb(250, 167, 72))"
      : null};
  background-color: ${(props) =>
    props.experience === "some" ? "rgb(250, 167, 72)" : null};
  border-radius: 10px;
  margin-right: 1rem;

  &::after {
    filter: blur(10px);
  }
`;

const Icon = styled.img`
  height: 50px;
`;
