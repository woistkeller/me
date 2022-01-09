import styled from "styled-components";
import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { BsFillStopFill } from "react-icons/bs";

import { Subtitle, Text, Button } from "./styles";

export default function MockMe() {
  const [song, setSong] = useState();

  const socket = socketIOClient("http://127.0.0.1:3005");
  useEffect(() => {
    socket.on("spotifyCurrently", (data) => {
      if (data.status !== "ok") setSong("none");
      else setSong(data);
    });
  }, []);

  return (
    <Container>
      <Subtitle>Mock me (with socket.io and spotify api)</Subtitle>
      <Text>
        {typeof song === "none"
          ? "I'm not listing any song now ):"
          : `I'm listing ${
              typeof song !== "undefined" && song.title
            }, right now`}
      </Text>

      <Player>
        <Button
          onClick={() => {
            socket.emit("spotifypause");
          }}
          style={{
            marginTop: "1rem",
            backgroundColor: "#5df592",
            color: "#141414",
          }}
        >
          Pause Song
          <BsFillStopFill size="24" />
        </Button>
      </Player>
    </Container>
  );
}

const Container = styled.div`
  background-color: #141414;
  color: white;
  border-radius: 5px;
  padding: 1rem;
  height: 100%;
  width: 100%;
`;

const Player = styled.div``;
