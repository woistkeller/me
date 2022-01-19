import styled from "styled-components";
import { Button } from "./styles";

export default function Bar({ settingPage, page }) {
  //it's a kinda ugly in small screens, improve later
  return (
    <Container>
      <Button
        aria-label="go to projects page"
        noFill={page === "projects" ? false : true}
        onClick={() => settingPage("projects")}
      >
        Projects
      </Button>
      <Button
        aria-label="go to about me page"
        noFill={page === "aboutme" ? false : true}
        onClick={() => settingPage("aboutme")}
      >
        About me
      </Button>
      <Button
        aria-label="go to playground page"
        noFill={page === "playground" ? false : true}
        onClick={() => settingPage("playground")}
      >
        Playground
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  background-color: white;
  border-radius: 7px;
  width: 100%;
  margin-top: 0.5rem;

  * {
    width: 100%;
    margin: 0 0.5rem;
  }

  @media only screen and (max-width: 400px) {
    * {
      font-size: 0.8rem;
    }
  }
`;
