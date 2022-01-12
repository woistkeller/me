import styled from "styled-components";

import Home from "./components/pages/Home";

export default function App() {
  return (
    <Container>
      <Box>
        <Home />
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
  background: linear-gradient(90deg, white 21px, transparent 1%) center,
    linear-gradient(white 21px, transparent 1%) center, #141414;
  background-size: 22px 22px;
`;

const Box = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  height: 100%;
`;