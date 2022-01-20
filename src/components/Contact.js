import styled from "styled-components";
import { Subtitle, Button } from "./styles";

import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <Container>
      <SubtitleContact>Contact</SubtitleContact>
      <SubtitleContact>caiankardoso@gmail.com</SubtitleContact>
      <SubtitleContact>caiankeller@icloud.com</SubtitleContact>
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
  background-image: url("/gradient.jpg");
  background-position: bottom right;
  background-size: cover;
  margin-top: 1rem;
`;

const SubtitleContact = styled(Subtitle)`
  justify-content: space-between;
`;
