import FadeIn from "react-fade-in";

import styled from "styled-components";
import Project from "./Project";

//get a selected list of projects
import projects from "../data/projects";

export default function Projects() {
  return (
    <Container>
      <FadeIn>
        {Object.entries(projects).map(([key, project], i) => {
          return <Project project={project} key={i} />;
        })}
      </FadeIn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
