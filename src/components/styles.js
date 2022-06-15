import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: #141414;
  font-weight: bold;
  font-size: 1.9rem;
  margin: 0.3rem;
  font-family: "Inter", sans-serif;

  @media only screen and (max-width: 370px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h2`
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #141414;
  font-size: 1.2rem;
  margin: 0.3rem;
`;

export const Text = styled.p`
  color: #141414;
  font-size: 1rem;
  margin: 0.3rem 0;
  text-align: justify;
  text-indent: 1rem;
 font-family: 'Roboto Mono', monospace;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  flex-wrap: nowrap;
 font-family: 'Roboto Mono', monospace;

  padding: ${(props) => (props.noFill ? "none" : "0.4rem 1.3rem")};
  margin: ${(props) => (props.noFill ? "none" : "0.3rem 0")};
  font-size: 1rem;
  border-radius: 6px;
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
    top: 1px;
  }
`;
