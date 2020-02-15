import React from 'react';
import { Packer } from 'docx';
import { saveAs } from 'file-saver';

import { createNewDocument } from "./newDocument";
import { createOldDocument } from "./oldDocument";

const App = () => {
  const generateNew = () => {
    const document = createNewDocument();
    save(document, "test-document-docx-jsx.docx");
  };

  const generateOld = () => {
    const document = createOldDocument();
    save(document, "test-document-docx.docx");
  };

  const save = (document, name) => Packer
    .toBlob(document)
    .then(blob => saveAs(blob, name));

  return (
    <>
      <button onClick={generateOld}>Generate .docx with docx</button>
      <button onClick={generateNew}>Generate .docx with docx-jsx</button>
    </>
  );
}

export default App;
