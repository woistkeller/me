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

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media only screen and (max-width: 1200px) {
    gap: 1rem;
  }
`;
