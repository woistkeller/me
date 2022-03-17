import { useState, useEffect } from "react";
import { usePalette } from "react-palette";

import styled from "styled-components";
import { Subtitle, Button, Text } from "./styles";

import { BsSpotify, BsFillPlayFill, BsFillStopFill } from "react-icons/bs";

export default function Spotify({ song }) {
  const { data } = usePalette(
    typeof song !== "undefined" && song !== "error" ? song.cover.url : null
  );
  const [isPlaying, play] = useAudio(
    typeof song !== "undefined" && song !== "error" ? song.preview : null
  );

  return (
    <Container dynamicColor={data.vibrant}>
      <Header>
        <Subtitle style={{ color: "#141414", marginTop: "0" }}>
          What I've been listening...
        </Subtitle>
        <BsSpotify />
      </Header>
      {song !== "error" ? (
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
                      <BsFillStopFill size="32" onClick={play} />
                    ) : (
                      <BsFillPlayFill size="32" onClick={play} />
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
                  aria-label={`redirect to the spotify a page of ${
                    typeof song !== "undefined" && song.title
                  }`}
                  style={{
                    marginTop: "1rem",
                    backgroundColor: "#5df592",
                    color: "#141414",
                  }}
                  onClick={() => {
                    window.open(song.playIt);
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
          <Cover
            src={typeof song !== "undefined" ? song.cover.url : undefined}
          />
        </Content>
      ) : (
        <Content>
          <Subtitle style={{ color: "#141414" }}>
            An unexpected error occurred. <br />
            Please, contact me and try reload the page
          </Subtitle>
        </Content>
      )}
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
  box-shadow: 2px 2px 10px 5px ${(props) => props.dynamicColor}a1;
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

const Cached = styled(Text)`
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

//custom hook that i got from internet, did i steal this? yes
//but i learnt a lot, that is more important
const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.pause();
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  });

  return [playing, toggle];
};
