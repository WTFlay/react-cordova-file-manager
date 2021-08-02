import React from "react";
import { FaPlus } from "react-icons/all";
import IconButton from "./components/IconButton";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  --margin: 4vh;
  height: calc(100vh - var(--margin) * 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: var(--margin) 0;
  color: #5A5A5A;
`;

const UploadButton = styled(IconButton)`
  width: 80%;
  font-size: 1rem;
`;

function App() {
  return (
    <AppContainer>
      <UploadButton icon={FaPlus} label="Upload new file" />
    </AppContainer>
  );
}

export default App;
