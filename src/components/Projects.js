import FadeIn from "react-fade-in";

import styled from "styled-components";
import { Title } from "./styles";

import Project from "./Project";

//get a selected list of projects
import projects from "../data/projects";

export default function Projects() {
  return (
    <Container>
      <FadeIn>
        <Title>My projects</Title>
        <Content>
          {Object.entries(projects).map(([key, project], i) => {
            return <Project project={project} key={i} />;
          })}
        </Content>
      </FadeIn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 1200px) {
    gap: 1rem;
  }
`;
