import { useState } from "react";

import styled from "styled-components";

import { SiGithub } from "react-icons/si";

import {
  BsFillFileEarmarkMedicalFill,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

import Projects from "../Projects";
import AboutMe from "../AboutMe";

import { Title, Button, Text } from "../styles";

import projects from "../../data/projects";

export default function Home() {
  const [page, setPage] = useState("projects");

  return (
    <Container>
      <Card>
        <Title>
          Hi, I'm Caian Keller Cardoso
          <Button
            noFill={true}
            onClick={() => {
              window.location.href = "https://github.com/vonweinkeller";
            }}
          >
            GitHub Page <SiGithub />
          </Button>
        </Title>
        <Text>
          I am a dedicated and committed web developer, always looking to learn
          new things and discovery technologies. I want to help bring new
          horizons to the web and help it become more accessible, fun and
          developed.
        </Text>
        <Buttons style={{ justifyContent: "flex-end" }}>
          <Button
            noFill={true}
            noMargin={true}
            onClick={() =>
              window.open("https://www.linkedin.com/in/caiankeller/")
            }
          >
            <BsLinkedin color="#141414" />
          </Button>
          <Button
            noFill={true}
            noMargin={true}
            onClick={() =>
              window.open("https://www.instagram.com/westerwaldkreis/")
            }
          >
            <BsInstagram color="#141414" />
          </Button>
          <Button>
            Resume <BsFillFileEarmarkMedicalFill />
          </Button>
        </Buttons>
      </Card>
      <div>
        <Menu>
          <Button noFill={true} onClick={() => setPage("projects")}>
            Projects
          </Button>
          <Button noFill={true} onClick={() => setPage("aboutme")}>
            About me
          </Button>
        </Menu>
        <Projects page={page} projects={projects} />
        <AboutMe page={page} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: left;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  padding: 2rem 1rem;

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  color: #141414;

  padding: 1rem;
  border-radius: 10px;

  background-image: url("/60e32be45e4022360a25d5fc_Mesh 62.jpg");
  background-position:  left bottom;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 1rem;
  border-radius: 10px;
  width: 100%;

  * {
    color: white;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  margin-top: 1rem;
  border-radius: 10px;
  width: 100%;

  * {
    color: white;
  }
`;
