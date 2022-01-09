import styled from "styled-components";

import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

import Spotify from "./Spotify";

import { Title, Text, Subtitle } from "./styles";

export default function Info({ page }) {
  const stacks = [
    {
      title: "node",
    },
  ];

  return (
    <Container isVisible={page}>
      <Languages>
        <Title>Languages</Title>
        <Subtitle>
          <img
            height="16"
            widht="16"
            style={{ marginRight: "1rem" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707–1800%29.svg/2560px-Flag_of_Great_Britain_%281707–1800%29.svg.png"
          />
          English(fluent)
        </Subtitle>
        <Subtitle>
          <img
            height="16"
            widht="16"
            style={{ marginRight: "1rem" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/120px-Flag_of_Portugal.svg.png"
          />
          Portuguese(fluent)
        </Subtitle>
        <Subtitle>
          <img
            height="16"
            widht="16"
            style={{ marginRight: "1rem" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Flag_of_Germany_%283-2_aspect_ratio%29.svg/120px-Flag_of_Germany_%283-2_aspect_ratio%29.svg.png"
          />
          Ich lernen Deutsch (just bad yet ):)
        </Subtitle>
      </Languages>
      <Spotify />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  display: ${(props) => (props.isVisible === "aboutme" ? "flex" : "none")};
`;

const Languages = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 1rem;
  background-image: url("/60e3d740d6e599865c0d4b63_Mesh 1.jpg");
  background-position: center center;
  background-size: cover;

  * {
    color: #141414;
  }
`;
