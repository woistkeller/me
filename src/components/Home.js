import FadeIn from "react-fade-in";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { Title, Button, Text } from "./styles";
import axios from "axios";

import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";

export default function Home() {
  const [github, setGithub] = useState();

  useEffect(() => {
    (async function () {
      await axios
        .get("https://gitapi.tilog.io/stats/woistkeller")
        .then((res) => {
          setGithub(res.data);
        });
    })();
  }, []);

  return (
    <Container>
      <FadeIn>
        <TitleHome>Hi, I'm Caian Keller Cardoso</TitleHome>
        <Text>
          {github &&
            `${github.name}, ${github.totalCommits} commits and ${github.totalPRs} pull request(s)`}
        </Text>
        <Buttons style={{ justifyContent: "flex-end" }}>
          <Button
            aria-label="redirect to my github profile"
            style={{ marginTop: "0.5rem" }}
            onClick={() => {
              window.open("https://github.com/woistkeller");
            }}
          >
            GitHub Page <SiGithub />
          </Button>
          <Button
            aria-label="redirect to my linkedin profile"
            style={{ marginTop: "0.5rem" }}
            onClick={() =>
              window.open("https://www.linkedin.com/in/caiankeller/")
            }
          >
            Linkedin <BsLinkedin />
          </Button>
        </Buttons>
      </FadeIn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media only screen and (max-width: 500px) {
    justify-content: start;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  > * {
    margin: 0 0.3rem;
  }
`;

const TitleHome = styled(Title)`
  font-size: 4rem;
  width: 100%;
  color: #c047f7;
  text-shadow: 2px 2px 10px #c047f7a1;

  @media only screen and (max-width: 1230px) {
    font-size: 4rem;
  }

  @media only screen and (max-width: 1040px) {
    font-size: 3.8rem;
    flex-wrap: wrap;
  }
`;
