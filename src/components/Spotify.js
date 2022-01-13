import { useState, useEffect, useRef } from "react";
import { usePalette } from "react-palette";
import api from "../api/api";

import styled from "styled-components";
import { Subtitle, Button, Text } from "./styles";

import { BsSpotify, BsFillPlayFill, BsFillStopFill } from "react-icons/bs";

export default function Spotify() {
  const [song, setSong] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const player = useRef();

  const { data } = usePalette(typeof song !== "undefined" && song.cover.url);

  useEffect(() => {
    (async function () {
      setSong(await api.spotifyGet());
    })();
  }, []);

  var expire;

  useEffect(() => {
    //i am so sorry 😖, but:
    // eslint-disable-next-line react-hooks/exhaustive-deps
    expire = setInterval(() => {
      if (player.current.currentTime > 30) {
        clearInterval(expire);
        setIsPlaying(false);
      }
    }, 1000);

    if (isPlaying !== true) {
      clearInterval(expire);
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      clearInterval(expire);
    };
  });

  return (
    <Container dynamicColor={data.vibrant} isPlaying={isPlaying}>
      <Header>
        <Subtitle style={{ color: "#141414", marginTop: "0" }}>
          What I've been listening...
        </Subtitle>
        <BsSpotify />
        <audio
          src={typeof song !== "undefined" ? song.preview : undefined}
          ref={player}
          type="audio/mpeg"
        />
      </Header>
      <Content>
        <Right>
          <Player>
            <div>
              <Subtitle
                style={{
                  margin: "0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>{typeof song !== "undefined" && song.title}</div>
                <div>
                  {isPlaying ? (
                    <BsFillStopFill
                      size="32"
                      onClick={() => {
                        player.current.pause();
                        setIsPlaying(false);
                      }}
                    />
                  ) : (
                    <BsFillPlayFill
                      size="32"
                      onClick={() => {
                        player.current.play();
                        setIsPlaying(true);
                      }}
                    />
                  )}
                </div>
              </Subtitle>
              <Text
                style={{
                  margin: 0,
                  color: "white",
                  textIndent: 0,
                }}
              >
                {typeof song !== "undefined" && song.artist}
              </Text>
              <Button
                style={{
                  marginTop: "1rem",
                  backgroundColor: "#5df592",
                  color: "#141414",
                }}
                onClick={() => {
                  window.open(song.url);
                }}
              >
                Play it on Spotify <BsSpotify />
              </Button>
            </div>
            {typeof song !== "undefined" && song.cached === "true" ? (
              <Cached>
                This information come from a cache to avoid break spotify api
                usage rules. Last update at {song.updated_at}.
              </Cached>
            ) : null}
          </Player>
        </Right>
        <Cover src={typeof song !== "undefined" ? song.cover.url : undefined} />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  background: ${(props) =>
    props.dynamicColor
      ? props.dynamicColor
      : "linear-gradient(180deg, #1db954, #5df592)"};
  padding: 1rem;
  margin-top: 0.5rem;
  border-radius: 10px;
  width: 100%;

  transition: all 500ms;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 1rem;

  @media only screen and (max-width: 656px) {
    margin-top: 1rem;
  } ;
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

  @media only screen and (max-width: 656px) {
    height: auto;
    width: 100%;
  } ;
`;

const Cached = styled.div`
  text-align: justify;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #5df592;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #141414;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 656px) {
    flex-direction: column-reverse;
  } ;
`;
