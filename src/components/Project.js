import { useEffect, useState } from "react";
import api from "../api/api";

import styled from "styled-components";
import { Button, Text, Subtitle } from "./styles";

import { BsArrowRightShort } from "react-icons/bs";
import { SiGithub } from "react-icons/si";

export default function Project({ project }) {
  const [github, setGithub] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    (async function () {
      setGithub(await api.githubGet(project.name));
    })();
  }, [project.name]);

  useEffect(() => {
    if (typeof github !== "undefined") {
      var date = github.date.split("T");
      var day = date[0].slice(5, 10).replace("-", "/");
      var time = date[1].slice(0, 5);
      setDate({ day: day, time: time });
    }
  }, [github]);

  return (
    <Container>
      <Subtitle>{project.title}</Subtitle>
      {github ? <Text>{github.description}</Text> : <Loading />}
      <Tags>
        {project.builtWidth.map((builtWidth, key) => {
          return <Tag key={key}>{builtWidth}</Tag>;
        })}
      </Tags>
      <Buttons>
        <Button
          aria-label={`see a demo of ${project.title}`}
          style={{ marginTop: "1rem", marginRight: "1rem" }}
          onClick={() => window.open(project.demo)}
        >
          Demo
          <BsArrowRightShort />
        </Button>
        {project && (
          <Button
            aria-label={`redirect to github page about ${project.title}`}
            style={{ marginTop: "1rem" }}
            onClick={() => window.open(project.github)}
          >
            GitHub <SiGithub />
          </Button>
        )}
        {github && (
          <Link
            rel="noreferrer"
            target="_blank"
            href={github.url}
            aria-label={`go to github page of last commit of ${project.title}`}
          >
            <SiGithub size="24" />
            <div style={{ marginLeft: "0.5rem" }}>
              Last commit <b>{github.message}</b>, day <b>{date && date.day}</b>
              , hour <b>{date && date.time}</b>.
            </div>
          </Link>
        )}
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem;
  border-radius: 10px;
  height: auto;
  width: 40%;
  flex-grow: 1;

  background-image: url("blue.png");
  background-position: top left;
  background-size: cover;

  &:last-child {
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
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
  padding: 0.1rem 0.7rem;
  background-color: white;
  color: #141414;
 font-family: 'Roboto Mono', monospace;
  border-radius: 5px;
`;

const Link = styled.a`
  display: flex;
  justify-content: left;
  align-items: center;
 font-family: 'Roboto Mono', monospace;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.8rem;
  border-radius: 7px;
  background-color: #141414;
  color: white;
  font-size: 0.8rem;
  text-decoration: none;
`;

const Loading = styled(Text)`
  background-image: url("loading.gif");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 32px;
  height: 2.2rem;
`;
