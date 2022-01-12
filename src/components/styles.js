import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0.5rem;
`;

export const Subtitle = styled.h2`
  display: flex;
  align-items: center;

  font-weight: bold;
  color: white;
  font-size: 1rem;
  margin: 0.5rem;
`;

export const Text = styled.h3`
  color: #141414;
  margin: 0.3rem;
  font-size: 0.99rem;
  text-align: justify;
  font-weight: normal;
  text-indent: 2rem;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border-radius: 7px;
  outline: none;
  border: none;
  background: ${(props) => (props.noFill ? "none" : "#141414")};
  color: ${(props) => (props.noFill ? "#141414" : "white")};
  font-weight: bold;
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
