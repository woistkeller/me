import { useState } from "react";
import FadeIn from "react-fade-in";

import styled from "styled-components";

import { SiGithub } from "react-icons/si";

import {
  BsFillFileEarmarkMedicalFill,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

import Projects from "../Projects";
import AboutMe from "../AboutMe";
import Playground from "../Playground";

import { Title, Button, Text } from "../styles";

import projects from "../../data/projects";

export default function Home() {
  const [page, setPage] = useState("projects");

  return (
    <Container>
      <FadeIn>
        <Card>
          <Title>
            Hi, I'm Caian Keller Cardoso
            <ButtonProfile
              noFill={true}
              onClick={() => {
                window.open("https://github.com/vonweinkeller");
              }}
            >
              GitHub Page <SiGithub />
            </ButtonProfile>
          </Title>
          <Text>
            I am a dedicated and committed web developer, always looking to
            learn new things and discovery technologies. I want to help bring
            new horizons to the web and help make it more accessible, fun and
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
            <Button
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1r_4nA0jSxN-MA7SHzqAQXD6D2ixh8Lj7/view?usp=sharing"
                );
              }}
            >
              Resume <BsFillFileEarmarkMedicalFill />
            </Button>
          </Buttons>
        </Card>

        <Menu>
          <Button
            noFill={page === "projects" ? false : true}
            onClick={() => setPage("projects")}
          >
            Projects
          </Button>
          <Button
            noFill={page === "aboutme" ? false : true}
            onClick={() => setPage("aboutme")}
          >
            About me
          </Button>
          <Button
            noFill={page === "playground" ? false : true}
            onClick={() => setPage("playground")}
          >
            Playground
          </Button>
        </Menu>
        {page === "projects" && <Projects projects={projects} />}
        {page === "aboutme" && <AboutMe />}
        {page === "playground" && <Playground />}
      </FadeIn>
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

  padding: 1rem;

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

  background-image: url("/gradient.jpg");
  background-position: left bottom;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 0.5rem;
  width: 100%;
`;

const Menu = styled.div`
  display: flex;
  flex-wrap: nowrap;
  background-color: white;
  margin-top: 0.5rem;
  border-radius: 7px;
  width: 100%;
  padding: 0.05rem 0.2rem;

  * {
    width: 100%;
    margin: 0 0.3rem;
  }

  @media only screen and (max-width: 400px) {
    * {
      font-size: 0.8rem;
    }
  }
`;

const ButtonProfile = styled(Button)`
  justify-content: flex-end;

  @media only screen and (max-width: 660px) {
    width: 100%;
  }
`;
