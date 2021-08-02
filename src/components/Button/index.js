import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #F6F6F6;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  
  &:hover,&:active {
    background-color: #E3E3E3;
  }
`;

export default Button;