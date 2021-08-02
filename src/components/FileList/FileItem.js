import React from 'react';
import styled from "styled-components";
import IconButton from "../IconButton";
import {FaDownload, FaTrash} from "react-icons/all";

const FileItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  --color: #5A5A5A;
  --font-size: 0.65rem;
  
  > div + div {
    margin-top: 0.5rem;
  }
`;

const FileItemName = styled.div`
  font-size: var(--font-size);
  color: var(--color);
  overflow: hidden;
  white-space: nowrap;
  margin-right: 8px;
`;

const FileItemButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  
  > button + button {
    margin-left: 0.5rem;
  }
`;

const FileItemButton = styled(IconButton)`
  font-size: var(--font-size);
  color: var(--color);
`;

const FileItem = ({ file, onDownloadClick, onDeleteClick }) => {
  return (
    <FileItemContainer>
      <FileItemName>{file.name}</FileItemName>
      <FileItemButtonContainer>
        <FileItemButton icon={FaDownload} />
        <FileItemButton icon={FaTrash} />
      </FileItemButtonContainer>
    </FileItemContainer>
  );
};

export default FileItem;