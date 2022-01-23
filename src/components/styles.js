import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  font-weight: bold;
  font-size: 1.9rem;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  margin: 0.5rem;
  font-family: "Inter", sans-serif;

  @media only screen and (max-width: 370px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h2`
  display: flex;
  align-items: center;
  text-shadow: 0 0 3px rgba(0, 0, 0, 3);
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
  margin: 0.5rem;
  font-family: "Inter", sans-serif;
`;

export const Text = styled.p`
  color: white;
  text-shadow: 0 0 3px rgba(0, 0, 0, 3);
  font-size: 1.2rem;
  margin: 0.5rem 0;
  text-align: justify;
  font-weight: normal;
  text-indent: 2rem;
  font-family: "Helvetica Neue", "Roboto", sans-serif;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  font-weight: bold;
  font-family: "Helvetica Neue", "Roboto", sans-serif;

  padding: ${(props) => (props.noFill ? "none" : "0.4rem 1.3rem")};
  margin: ${(props) => (props.noFill ? "none" : "0.3rem 0")};
  font-size: 1rem;
  border-radius: 7px;
  outline: none;
  border: none;

  background: ${(props) => (props.noFill ? "none" : "#141414")};
  color: ${(props) => (props.noFill ? "#141414" : "white")};

  transition: all 300ms ease-in-out;
  word-break: break-all;

  & > svg {
    margin-left: ${(props) => (props.noMargin ? "0" : "0.5rem")};
  }

  &:active {
    top: ${(props) => (props.noFill ? "none" : "1")};
  }

  &:hover {
    text-decoration: underline;
  }
`;
