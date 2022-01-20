import styled from "styled-components";
import { Subtitle, Button, Text } from "./styles";

import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <Container>
      <Subtitle>Contact</Subtitle>
      <Text>caiankardoso@gmail.com</Text>
      <Text>caiankeller@icloud.com</Text>
      <SubtitleContact>
        Whatsapp +55 013 988127-4272{" "}
        <Button
          aria-label="redirect to a whatsapp chat with me"
          style={{ marginTop: "1rem" }}
          onClick={() => window.open("https://wa.me/+550139881274272")}
        >
          Chat with me <FaWhatsapp />
        </Button>
      </SubtitleContact>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 1rem;
  background: linear-gradient(170deg, #514da2, #423f84a1);
  margin-top: 1rem;
`;

const SubtitleContact = styled(Subtitle)`
  justify-content: space-between;
`;
