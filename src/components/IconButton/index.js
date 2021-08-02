import React from 'react';
import Button from "../Button";
import styled from "styled-components";

const IconButtonContainer = styled(Button)`
  > span {
    margin-left: 0.5rem;
  }
`

const IconButton = ({ className, icon, label }) => {
  const Icon = icon;
  return (
    <IconButtonContainer className={className}>
      <Icon />
      {label && <span>{label}</span>}
    </IconButtonContainer>
  );
};

export default IconButton;