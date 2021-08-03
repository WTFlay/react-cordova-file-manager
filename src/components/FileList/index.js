import React from 'react';
import styled from "styled-components";
import FileItem from "./FileItem";

const FileListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FileList = ({ className, files, onDownloadClick, onDeleteClick, renderKey }) => {

  const renderFileItem = (file) => (
    <FileItem
      key={renderKey ? renderKey(file) : file.id}
      file={file}
      onDownloadClick={() => onDownloadClick(file)}
      onDeleteClick={() => onDeleteClick(file)}
    />
  );

  return (
    <FileListContainer className={className}>
      {files.map(renderFileItem)}
    </FileListContainer>
  );
};

export default FileList;