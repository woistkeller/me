import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

import { BsSpotify, BsFillPlayFill, BsFillStopFill } from "react-icons/bs";

import { Title, Subtitle, Button } from "./styles";
import axios from "axios";

export default function Spotify() {
  const [song, setSong] = useState();
  const [isPlaying, setIsPlaying] = useState();
  const player = useRef();

  useEffect(() => {
    var fetching = async () =>
      await axios.get(`http://127.0.0.1:3005/spotify`).then((e) => {
        console.log(e);
        setSong(e.data);
      });
    fetching();
  }, []);

  let expire;

  useEffect(() => {
    if (isPlaying !== true) {
      clearInterval(expire);
    }

    expire = setInterval(() => {
      if (player.current.currentTime > 30) {
        clearInterval(expire);
        setIsPlaying(false);
      }
    }, 1000);
  }, [isPlaying]);

  return (
    <>
      <Title style={{ color: "#5df592" }}>
        What's I've been hearing
        <BsSpotify style={{ marginLeft: "1rem" }} />
      </Title>
      <Container>
        <audio
          src={typeof song !== "undefined" && song.preview}
          ref={player}
          type="audio/mpeg"
        ></audio>
        <Right>
          <Player>
            <div>
              <Subtitle style={{ margin: "0" }}>
                {typeof song !== "undefined" && song.title}
                {isPlaying ? (
                  <BsFillStopFill
                    size="24"
                    onClick={() => {
                      player.current.pause();
                      setIsPlaying(false);
                    }}
                  />
                ) : (
                  <BsFillPlayFill
                    size="24"
                    onClick={() => {
                      player.current.play();
                      setIsPlaying(true);
                    }}
                  />
                )}
              </Subtitle>
              <Artist> {typeof song !== "undefined" && song.artist} </Artist>
              <Button
                style={{
                  marginTop: "1rem",
                  backgroundColor: "#5df592",
                  color: "#141414",
                  fontFamily: "roboto, sans-serif",
                }}
              >
                Play it on Spotify <BsSpotify style={{ marginLeft: "1rem" }} />
              </Button>
            </div>
            {typeof song !== "undefined" && song.cached === "true" ? (
              <Cached>
                This information was cached to avoid break spotify api usage
                rules :D
              </Cached>
            ) : null}
          </Player>
        </Right>
        <div>
          <Cover src={typeof song !== "undefined" && song.cover.url} />
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: #5df592;
  background: linear-gradient(180deg, #1db954, #5df592);
  border-radius: 10px;
  padding: 1rem;
  margin-top: 1rem;

  @media only screen and (max-width: 656px) {
    flex-direction: column-reverse;
  } ;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 1rem;
`;

const Artist = styled.div`
  margin-top: 0.1rem;
`;

const Player = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem;
  border-radius: 10px;
  background-color: #141414;
  height: 100%;
`;

const Cover = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 7px;
  padding-bottom: 0;

  @media only screen and (max-width: 656px) {
    height: auto;
    width: 100%;
  } ;
`;

const Cached = styled.div`
  font-size: 0.7rem;
  justify-self: end;
`;
