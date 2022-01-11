import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: white;
  font-weight: bolder;
  font-size: 1.3rem;
  margin: 0.5rem 0;
`;

export const Subtitle = styled.h2`
  display: flex;
  align-items: center;

  font-weight: bolder;
  color: white;
  text-shadow: 2px 2px 20px rgba(206, 206, 206, 0.82);
  font-size: 1.1rem;
  margin: 0.5rem 0;
`;

export const Text = styled.h3`
  color: #141414;
  text-shadow: 2px 2px 20px rgba(206, 206, 206, 0.82);
  margin: 0.5rem;
  text-align: justify;
  font-weight: bold;
  text-indent: 1rem;
`;

export const Button = styled.button`
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  outline: none;
  border: none;
  background: ${(props) => (props.noFill ? "none" : "#141414")};
  color: ${(props) => (props.noFill ? "#141414" : "white")};
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  * {
    margin-left: ${(props) => (props.noMargin ? "0" : "0.5rem")};
  }

  &:active {
    top: ${(props) => (props.noFill ? "none" : "1")};
  }

  &:hover {
    text-decoration: underline;
  }
`;
