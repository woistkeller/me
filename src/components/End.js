import styled from "styled-components";
import { Title } from "./styles";

export default function End() {
  return (
    <Container>
      <Text>You reached the end.</Text>
      {/* <ButtonNotFound>Back to the surface 😳</ButtonNotFound> */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;

  margin: 2rem 0;

  @media only screen and (max-width: 500px) {
    justify-content: start;
  }
`;

/*const ButtonNotFound = styled.button`
font-family: 'Roboto Mono', monospace;
  padding: 0.4rem 1.3rem};
  font-size: 1rem;
  border-radius: 6px;
  outline: none;
  border: none;

  transition: all 300ms ease-in-out;

  color: #141414;
  background-image: url("blue.png");
  background-position: center center;
  background-size: cover;
  box-shadow: 2px 2px 15px 5px #c047f7a1;

  &:hover {
    text-decoration: underline;
    background-position: top;
  }
`;*/

const Text = styled(Title)`
  font-family: "Inter", sans-serif;
  font-size: 4.5rem;
  width: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  background-image: url("blue.png");
  background-position: center center;
  background-size: cover;
  text-shadow: 2px 2px 10px #c047f7a1;

  @media only screen and (max-width: 1230px) {
    font-size: 4rem;
  }

  @media only screen and (max-width: 1040px) {
    font-size: 3.8rem;
    flex-wrap: wrap;
  }
`;
