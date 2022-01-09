import styled from "styled-components";
import { BsArrowRightShort } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { MdOpenInNew } from "react-icons/md";

import { Button, Text, Subtitle } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Card({ project }) {
  const [commit, setCommit] = useState();

  useEffect(() => {
    var fetching = async (url) =>
      await axios.get(`http://127.0.0.1:3005/github/${url}/`).then((e) => {
        setCommit(e.data);
      });

    typeof project.githubTitle !== "undefined" && fetching(project.githubTitle);
  }, []);

  return (
    <Container>
      <Subtitle>{project.title}</Subtitle>
      <Text style={{ color: "#141414" }}>{project.about}</Text>
      <BuildWith>
        {project.buildWith.map((buildWith, key) => {
          return <Tag key={key}>{buildWith}</Tag>;
        })}
      </BuildWith>
      <Buttons>
        <Button
          style={{ marginTop: "1rem" }}
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
        {typeof commit !== "undefined" && (
          <a
            target="_blank"
            href={commit.url}
            style={{ textDecoration: "none" }}
          >
            <Text
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                color: "#141414",
                marginTop: "0.5rem",
                textDecoration: "underline",
              }}
            >
              {" "}
              <SiGithub style={{ marginRight: "0.5rem" }} />
              Last commit&nbsp;
              <b>{commit.message}</b> | {commit.date}
              <Dot />
              <MdOpenInNew style={{ marginLeft: "0.5rem" }} />
            </Text>
          </a>
        )}
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  font-size: 0.8rem;
  color: #141414;

  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;

  /* background: linear-gradient(55deg, #ce9ffc, #7367f0); */
  background-image: url("/60e32bddce0b78d0ee089614_Mesh 41.jpg");
  background-position: left top;
  background-size: cover;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
`;

const BuildWith = styled.div`
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
  background-color: white;
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
