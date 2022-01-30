import styled from "styled-components";
import { Subtitle, Text, Button } from "./styles";

import { FaWhatsapp } from "react-icons/fa";

export default function Languages() {
  return (
    <Container>
      <Subtitle>Languages</Subtitle>
      <Text>
        <Flag
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707–1800%29.svg/2560px-Flag_of_Great_Britain_%281707–1800%29.svg.png"
        />
        English
      </Text>
      <Text>
        <Flag
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/120px-Flag_of_Portugal.svg.png"
        />
        Portuguese
      </Text>
      <Text>
        <Flag
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Flag_of_Germany_%283-2_aspect_ratio%29.svg/120px-Flag_of_Germany_%283-2_aspect_ratio%29.svg.png"
        />
        Ich lernen Deutsch (pretty bad yet, just wait 6 months :D)
      </Text>
      <Text>
        <Flag
          alt=""
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1280px-Flag_of_Italy.svg.png"
        />
        <Flag
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Flag_of_Norway_%28c81329_for_red_%26_14275b_for_blue%29.svg/1280px-Flag_of_Norway_%28c81329_for_red_%26_14275b_for_blue%29.svg.png"
        />
        Interest in Norwegian and Italian. Wanna help? :) Send me some cool
        content in those languages
        <Button
          aria-label="redirect to a whatsapp chat with me"
          style={{ marginTop: "1rem" }}
          onClick={() => window.open("https://wa.me/+550139881274272")}
        >
          here
          <FaWhatsapp />
        </Button>
      </Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 1rem;
  margin-top: 1rem;
  background-image: url("aboutme.png");
  background-position: center center;
  background-size: cover;
`;

const Flag = styled.img`
  height: auto;
  width: 26px;
  margin-right: 1rem;
`;
