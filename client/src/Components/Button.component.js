import styled from "styled-components";

export const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 4rem;
  letter-spacing: 0.5px;
  line-height: 4rem;
  padding: 0 35px 0 35px;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  margin: 1rem 1rem 1rem 1rem;
  display: inline;
  justify-content: center;
  border-radius: 1rem;
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
