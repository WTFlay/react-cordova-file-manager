import React from "react";
import { FaPlus } from "react-icons/all";
import IconButton from "./components/IconButton";
import styled from "styled-components";
import FileList from "./components/FileList";

const AppContainer = styled.div`
  width: 100%;
  --margin: 4vh;
  height: calc(100vh - var(--margin) * 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: var(--margin) 0;
  padding: 0 1rem;
`;

const UploadButton = styled(IconButton)`
  width: 100%;
  font-size: 1rem;
  color: #5A5A5A;
`;

const AppFileList = styled(FileList)`
  margin-top: 1rem;
  overflow-y: scroll;
`;

const fakeFiles = [
  { id: 1, name: 'React Course - 1.pdf' },
  { id: 2, name: 'Fichier avec un tres tres tres tres tres tres tres tres grand nom.pdf' },
  { id: 3, name: 'Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum.pdf' },
  { id: 4, name: 'Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum.pdf' },
  { id: 5, name: 'Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum.pdf' },
  { id: 6, name: 'Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum.pdf' },
  { id: 7, name: 'Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum.pdf' },
  { id: 8, name: 'Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum.pdf' },
  { id: 9, name: 'Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum.pdf' },
  { id: 10, name: 'Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum.pdf' },
  { id: 11, name: 'Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum.pdf' },
  { id: 12, name: 'Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum.pdf' },
  { id: 13, name: 'Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum-Loremipsum.pdf' }
];

function App() {
  return (
    <AppContainer>
      <UploadButton icon={FaPlus} label="Upload new file" />
      <AppFileList files={fakeFiles} onDownloadClick={console.log} onDeleteClick={console.log} />
    </AppContainer>
  );
}

export default App;
