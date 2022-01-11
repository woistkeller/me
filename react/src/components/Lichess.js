import { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";
import { Subtitle, Button } from "./styles";

import { FaChess } from "react-icons/fa";

export default function Lichess() {
  const [lichess, setLichess] = useState();

  useEffect(() => {
    const fetching = async () =>
      await axios.get("https://caian.herokuapp.com/lichess").then((e) => {
        setLichess(e.data);
      });

    fetching();
  }, []);

  return (
    <Container>
      <Subtitle>
        Lichess <FaChess style={{ marginLeft: "1rem" }} />
      </Subtitle>
      <Rating>
        <div>{typeof lichess !== "undefined" && lichess.username} </div>
        <div>
          Rapid rating {typeof lichess !== "undefined" && lichess.rating}
        </div>
      </Rating>
      <Button
        style={{ marginTop: "1rem" }}
        onClick={() => {
          window.open(lichess.url);
        }}
      >
        Add me, let's play some day
      </Button>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 10px;
  width: 100%;

  display: flex;
  flex-direction: column;
  background-image: url("/60e3d740d6e599865c0d4b63_Mesh 1.jpg");
  background-position: center center;
  background-size: cover;

  border-radius: 10px;
`;

const Rating = styled(Subtitle)`
  display: flex;
  justify-content: space-between;
`;
