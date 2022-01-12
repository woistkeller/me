import { useEffect, useState } from "react";
import api from "../api/api";

import styled from "styled-components";
import { Button, Text, Subtitle } from "./styles";

import { BsArrowRightShort } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { MdOpenInNew } from "react-icons/md";

export default function Project({ project }) {
  const [github, setGithub] = useState();

  useEffect(() => {
    (async function () {
      setGithub(await api.githubGet(project.name));
    })();
  }, []);

  return (
    <Container>
      <Subtitle>{project.title}</Subtitle>
      {typeof github !== "undefined" && github.description ? (
        <Text>{github.description}</Text>
      ) : (
        <Loading />
      )}
      <Tags>
        {project.buildWith.map((buildWith, key) => {
          return <Tag key={key}>{buildWith}</Tag>;
        })}
      </Tags>
      <Buttons>
        <Button
          style={{ marginTop: "1rem", marginRight: "1rem" }}
          onClick={() => window.open(project.demo)}
        >
          Demo
          <BsArrowRightShort />
        </Button>
        {typeof project.github !== "undefined" && (
          <Button
            style={{ marginTop: "1rem" }}
            onClick={() => window.open(project.github)}
          >
            GitHub <SiGithub />
          </Button>
        )}
        {typeof github !== "undefined" && (
          <Link rel="noreferrer" target="_blank" href={github.url}>
            <SiGithub />
            <div>
              Last commit {github.message}, {github.date}{" "}
            </div>
            <Dot />
            <MdOpenInNew />
          </Link>
        )}
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;

  background-image: url("/royal-blue-Presentation-Gradient-Background.jpg");
  background-position: left top;
  background-size: cover;
  width: 100%;
  color: #141414;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
`;

const Tags = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;

  * {
    margin-right: 0.5rem;
  }
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  padding: 0.05rem 0.5rem;
  background-color: #c2c2c2;
  color: #141414;
  font-weight: bold;

  border-radius: 5px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin-left: 0.5rem;
  border-radius: 50%;
  background-color: #1db954;
  border: 1px solid #1db954;
  box-shadow: 0 0 15px #1db954;
`;

const Link = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 0.5rem;

  * {
    margin-left: 0.5rem;
  }
`;

const Loading = styled(Text)`
  background-image: url("/loading-buffering.gif");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 32px;
  height: 2.2rem;
`;