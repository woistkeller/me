import styled from "styled-components";
import Project from "./Project";
import FadeIn from "react-fade-in";

export default function Projects({ projects, page }) {
  return (
    <Container isVisible={page}>
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
