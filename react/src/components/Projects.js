import styled from "styled-components";
import Card from "./Card";

import { Text } from "./styles";

export default function Projects({ projects, page }) {
  return (
    <Container isVisible={page}>
      {Object.entries(projects).map(([key, project], i) => {
        {
          return <Card project={project} key={i} />;
        }
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  display: ${(props) => (props.isVisible === 'projects' ? "flex" : "none")};
`;
