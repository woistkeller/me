import { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";
import { Button, Text, Subtitle } from "./styles";

import { BsArrowRightShort } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { MdOpenInNew } from "react-icons/md";

export default function Project({ project }) {
  const [github, setGithub] = useState();

  useEffect(() => {
    var fetching = async () =>
      await axios
        .get(`https://caian.herokuapp.com/github/${project.name}/`)
        .then((e) => {
          setGithub(e.data);
        });

    fetching();
  }, [project.name]);

  return (
    <Container>
      <Subtitle>{project.title}</Subtitle>
      <Text>{typeof github !== "undefined" && github.description}</Text>
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
            <Text>
              <SiGithub style={{ marginRight: "0.5rem" }} />
              Last commit {github.message}, {github.date}
            </Text>
            <MdOpenInNew style={{ marginRight: "0.5rem" }} />
            <Dot />
          </Link>
        )}
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  color: #141414;

  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;

  background-image: url("/royal-blue-Presentation-Gradient-Background.jpg");
  background-position: left top;
  background-size: cover;
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
  margin-top: 1rem;
  padding: 0.5rem;
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
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  margin-top: 0.5rem;
`;
