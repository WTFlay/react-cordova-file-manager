import React from 'react';
import Button from "../Button";
import styled from "styled-components";

const IconButtonContainer = styled(Button)`
  > span {
    margin-left: 0.5rem;
  }
`

const IconButton = ({ className, icon, label, onClick }) => {
  const Icon = icon;
  return (
    <IconButtonContainer className={className} onClick={onClick}>
      <Icon />
      {label && <span>{label}</span>}
    </IconButtonContainer>
  );
};

export default IconButton;