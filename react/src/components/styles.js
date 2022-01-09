import styled from "styled-components";

export const Title = styled.h1`
  color: white;

  font-weight: bolder;
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Subtitle = styled.h2`
  color: white;
  display: flex;
  align-items: center;
  font-weight: bolder;
  font-size: 1rem;
  margin: 0.5rem 0;
`;

export const Text = styled.h3`
  color: white;
  margin: 0 0.5rem;
  text-align: justify;
  font-weight: normal;
`;

export const Button = styled.button`
  padding: 0.7rem 1rem;
  font-size: 0.9rem;
  margin-right: 0.5rem;
  border-radius: 7px;
  outline: none;
  border: none;
  background: ${(props) => (props.noFill ? "none" : "#141414")};
  color: #6158cb;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  * {
    margin-left: 0.5rem;
  }

  &:active {
    top: ${(props) => (props.noFill ? "none" : "1")};
  }

  &:hover {
    text-decoration: underline;
  }
`;
