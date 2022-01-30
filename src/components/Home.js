import FadeIn from "react-fade-in";

import styled from "styled-components";
import { Title, Button, Text } from "./styles";

import { SiGithub } from "react-icons/si";
import { BsFillFileEarmarkMedicalFill, BsLinkedin } from "react-icons/bs";

export default function Home() {
  return (
    <Container>
      <FadeIn>
        <TitleHome>
          <Logo>
            <img
              alt=""
              src="/favicon.png"
              width="128"
              height="128"
              style={{ marginRight: "0.5rem" }}
            />
            Hi, I'm Caian Keller Cardoso
          </Logo>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "end" }}
          >
            <ButtonProfile
              aria-label="redirect to my github profile"
              noFill
              onClick={() => {
                window.open("https://github.com/vonweinkeller");
              }}
            >
              GitHub Page <SiGithub />
            </ButtonProfile>
          </div>
        </TitleHome>
        <Text style={{ fontSize: "1.5rem", background: "#141414a1" }}>
          I am a dedicated and committed web developer, always looking to learn
          new things and discovery technologies. I want to help bring new
          horizons to the web and help make it more accessible, fun and
          developed.
        </Text>
        <Buttons style={{ justifyContent: "flex-end" }}>
          <ButtonHome
            aria-label="redirect to my linkedin profile"
            style={{ marginTop: "0.5rem" }}
            noMargin
            onClick={() =>
              window.open("https://www.linkedin.com/in/caiankeller/")
            }
          >
            <BsLinkedin />
          </ButtonHome>
          <ButtonHome
            aria-label="open my resume in PDF"
            style={{ marginTop: "0.5rem" }}
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/11VTvrC4leLuH5MbcyyC1PHd45UFZHfRF/view?usp=sharing"
              );
            }}
          >
            Resume <BsFillFileEarmarkMedicalFill />
          </ButtonHome>
        </Buttons>
      </FadeIn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  @media only screen and (max-width: 500px) {
    justify-content: start;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  > * {
    margin: 0 0.3rem;
  }
`;

const ButtonHome = styled(Button)`
  background: linear-gradient(230deg, #f69e37, #f32457);
  font-size: 1.3rem;
  color: #141414;
  margin-bottom: 1rem;
`;

const TitleHome = styled(Title)`
  font-size: 4.5rem;
  width: 100%;
  background-image: url("title.jpg");
  background-position: center center;
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: none;
  text-shadow: none;

  @media only screen and (max-width: 1230px) {
    font-size: 4rem;
  }

  @media only screen and (max-width: 1040px) {
    font-size: 3.8rem;
    flex-wrap: wrap;
  }
`;

const Logo = styled.div`
  flex-wrap: wrap;
`;

const ButtonProfile = styled(Button)`
  justify-content: flex-end;
  font-size: 1.5rem;
  svg {
    color: #f69e37;
  }
`;
