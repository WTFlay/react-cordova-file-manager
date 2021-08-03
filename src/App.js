import React, {useEffect, useState} from "react";
import { FaPlus } from "react-icons/all";
import IconButton from "./components/IconButton";
import styled from "styled-components";
import FileList from "./components/FileList";

const cordovaLauncher = () => {
  return new Promise((resolve, reject) => {
    if (window.cordova) {
      resolve(window.cordova);
    } else {
      reject('Cordova is not available.');
    }
  });
};

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

function logError(title) {
  return (error) => console.error(title, error);
}

const App = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    cordovaLauncher().then(cordova => {
      window.resolveLocalFileSystemURL(cordova.file.dataDirectory, entry => {
        entry.getDirectory('PDF', { create: true }, pdfEntryDir => {
          const reader = pdfEntryDir.createReader();
          reader.readEntries(setFiles, logError("readEntries"));
        }, logError("access pdf entry"));
      }, logError("resolve data directory"));
    }).catch(console.log);
  }, []);

  const uploadFile = () => {
    cordovaLauncher().then(cordova => {
      // eslint-disable-next-line no-undef
      fileChooser.open({ "mime": "application/pdf" }, url => {
        window.resolveLocalFileSystemURL(url, uploadFileEntry => {
          // eslint-disable-next-line no-undef
          window.resolveLocalFileSystemURL(cordova.file.dataDirectory, dirEntry => {
            dirEntry.getDirectory('PDF', { create: true } , pdfDirEntry => {
              cordova.plugins.filename.getFilename(uploadFileEntry.nativeURL, fileName => {
                uploadFileEntry.copyTo(pdfDirEntry, fileName, console.log, logError("copyTo"));
              }, logError("getFilename"));
            })
          }, logError("resolve dataDirectory"))
        }, logError("resolve url"));
      }, logError("open pdf"));
    }).catch(console.log);
  };

  const download = (file) => {
    cordovaLauncher().then(cordova => {
      cordova.plugins.fileOpener2.open(
        file.nativeURL,
        'application/pdf',
        { success: console.log, error: console.error }
      );
    }).catch(console.log);
  };

  return (
    <AppContainer>
      <UploadButton icon={FaPlus} label="Upload new file" onClick={uploadFile} />
      <AppFileList
        files={files}
        renderKey={file => file.nativeURL}
        onDownloadClick={download}
        onDeleteClick={console.log}
      />
    </AppContainer>
  );
};

export default App;
