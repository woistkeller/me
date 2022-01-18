import { useState, useEffect } from "react";
import api from "../api/api";

import styled from "styled-components";
import { Subtitle, Button } from "./styles";

import { FaChess } from "react-icons/fa";

export default function Lichess() {
  const [lichess, setLichess] = useState();

  useEffect(() => {
    (async function () {
      setLichess(await api.lichessGet());
    })();
  }, []);

  return (
    <Container>
      <Subtitle style={{ color: "#141414" }}>
        Lichess <FaChess style={{ marginLeft: "1rem" }} />
      </Subtitle>
      <Rating style={{ color: "#141414" }}>
        <div>{typeof lichess !== "undefined" && lichess.username} </div>
        <div>
          Rapid rating {typeof lichess !== "undefined" && lichess.rating}
        </div>
      </Rating>
      <Button
        aria-label="redirect to my lichess profile"
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
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 0.5rem;
  border-radius: 10px;
  width: 100%;
  border: 1px solid #141414;
  background-image: url("/gradientSecondary.png");
  background-position: center center;
  background-size: cover;
`;

const Rating = styled(Subtitle)`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 375px) {
    flex-direction: column;đ
  }
`;
