import styled from "styled-components";
import { useState } from "react";
import { SiGithub } from "react-icons/si";
import {
  BsFillFileEarmarkMedicalFill,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

import Projects from "../Projects";
import Info from "../Info";

import { Title, Button, Text, Subtitle } from "../styles";

export default function Home() {
  const [page, setPage] = useState("projects");

  const projects = [
    {
      title: "Vorwärts (personal project)",
      about: "API and library for public domain books ",
      demo: "https://vorwarts.herokuapp.com/library",
      github: "https://github.com/vonweinkeller/vorwarts-api",
      githubTitle: "vorwarts-api",
      buildWith: ["React", "Node", "REST API", "MongoDB"],
    },
    {
      title: "EightyFour (personal project)",
      about: "Social credit social media",
      demo: "https://eightyfour.vercel.app/",
      github: "https://github.com/vonweinkeller/eightyfour",
      githubTitle: "eightyfour",
      buildWith: [
        "React",
        "Redux-Toolkit",
        "RTK-Query",
        "SpotifyAPI",
        "REST API",
        "MUI",
        "Node",
        "Private Routes",
      ],
    },
    {
      title: "Okuyama (free lance)",
      about: "Web and Android application for orders and deliveries trackling",
      demo: "https://marmohta.herokuapp.com",
      buildWith: [
        "JQuery",
        "Boostrap",
        "Socket.io (client and server side)",
        "React Native",
      ],
    },
  ];

  return (
    <Container>
      <Card>
        <Title style={{ color: "white" }}>
          Hi, I'm Caian Keller Cardoso
          <Button
            noFill={true}
            style={{ color: "#141414" }}
            onClick={() => {
              window.location.href = "https://github.com/vonweinkeller";
            }}
          >
            GitHub Page <SiGithub />
          </Button>
        </Title>
        <Text style={{ color: "#141414" }}>
          I am a dedicated and committed web developer, always looking to learn
          new things and discovery technologies. I want to help bring new
          horizons to the web and help it become more accessible, fun and
          developed.
        </Text>
        <Buttons>
          <Button
            style={{
              float: "right",
              color: "white",
            }}
          >
            Resume <BsFillFileEarmarkMedicalFill />
          </Button>

          <Button
            onClick={() =>
              window.open("https://www.linkedin.com/in/caiankeller/")
            }
            style={{
              float: "right",
              color: "white",
            }}
          >
            LinkedIn <BsLinkedin />
          </Button>
          <Button
            onClick={() =>
              window.open("https://www.instagram.com/westerwaldkreis/")
            }
            style={{
              float: "right",
              color: "white",
            }}
          >
            Instagram <BsInstagram />
          </Button>
        </Buttons>
      </Card>
      <div>
        <Buttons>
          <Button noFill={true} onClick={() => setPage("projects")}>
            Projects
          </Button>
          <Button noFill={true} onClick={() => setPage("aboutme")}>
            About me
          </Button>
        </Buttons>
        <Projects page={page} projects={projects} />
        <Info page={page} />
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

  padding: 2rem;

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

  background-image: url("/gradientpurple.jpg");
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  border-radius: 10px;
  width: 100%;
  flex-wrap: wrap;
`;
