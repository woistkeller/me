import FadeIn from "react-fade-in";

import styled from "styled-components";
import { Title, Button, Text } from "./styles";

import { SiGithub } from "react-icons/si";
import { BsFillFileEarmarkMedicalFill, BsLinkedin } from "react-icons/bs";

export default function Header() {
  return (
    <Container>
      <FadeIn>
        <Card>
          <Title>
            <div>
              <img
                alt=""
                src="/favicon.png"
                width="64"
                height="64"
                style={{ marginRight: "0.5rem" }}
              />
              Hi, I'm Caian Keller Cardoso
            </div>
            <ButtonProfile
              aria-label="redirect to my github profile"
              noFill
              style={{ textDecoration: "underline" }}
              onClick={() => {
                window.open("https://github.com/vonweinkeller");
              }}
            >
              GitHub Page <SiGithub />
            </ButtonProfile>
          </Title>
          <Text>
            I am a dedicated and committed web developer, always looking to
            learn new things and discovery technologies. I want to help bring
            new horizons to the web and help make it more accessible, fun and
            developed.
          </Text>
          <Buttons style={{ justifyContent: "flex-end" }}>
            <Button
              aria-label="redirect to my linkedin profile"
              style={{ marginTop: "0.5rem" }}
              noMargin
              onClick={() =>
                window.open("https://www.linkedin.com/in/caiankeller/")
              }
            >
              <BsLinkedin />
            </Button>
            <Button
              aria-label="open my resume in PDF"
              style={{ marginTop: "0.5rem" }}
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/11VTvrC4leLuH5MbcyyC1PHd45UFZHfRF/view?usp=sharing"
                );
              }}
            >
              Resume <BsFillFileEarmarkMedicalFill />
            </Button>
          </Buttons>
        </Card>
      </FadeIn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: left;
  flex-direction: column;
  width: 100%;
`;

const Card = styled.div`
  color: #141414;
  padding: 1rem;
  border-radius: 10px;
  background-image: url("/gradientHeader.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  > * {
    margin: 0 0.3rem;
  }
`;

const ButtonProfile = styled(Button)`
  justify-content: flex-end;

  @media only screen and (max-width: 696px) {
    width: 100%;
  }
`;
