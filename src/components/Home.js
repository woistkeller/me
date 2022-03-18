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
            {/* <img
              alt=""
              src="/favicon.png"
              width="128"
              height="128"
              style={{ marginRight: "0.5rem" }}
            /> */}
            Hi, I'm Caian Keller Cardoso
          </Logo>
        </TitleHome>
        <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
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
        <Text>
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
  box-shadow: 2px 2px 15px 5px #f69e37;
  color: #141414;
  margin-bottom: 1rem;
  font-weight: 500;
  &:hover {
    top: 1px;
  }
`;

const TitleHome = styled(Title)`
  font-family: "Inter", sans-serif;
  font-size: 4rem;
  width: 100%;
  color: #c047f7;
  text-shadow: 2px 2px 10px #c047f7a1;

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
  font-weight: 500;
  padding: 0.5rem;
  transition: all 300ms ease-in-out;

  color: #141414;
  font-weight: 700;
  background-image: url("blue.png");
  background-position: center center;
  background-size: cover;
  box-shadow: 2px 2px 15px 5px #c047f7a1;

  &:hover {
    text-decoration: underline;
    background-position: top;
  }
  &:hover {
    text-decoration: underline;
    top: 1px;
  }
`;
