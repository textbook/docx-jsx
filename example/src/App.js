import React from 'react';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

import { createDocument } from "./document";

const createOldDocument = ({ text }) => {
  // Create document
  const doc = new Document();

  const tabbedText = "\tGithub is the best";
  console.log('tabbedText', tabbedText);
  // Documents contain sections, you can have multiple sections per document, go here to learn more about sections
  // This simple example will only contain one section
  doc.addSection({
    properties: {},
    children: [
      new Paragraph({
        children: [
          new TextRun(text),
          new TextRun({
            text: "Foo Bar",
            bold: true
          }),
          new TextRun({
            text: tabbedText,
            bold: true
          })
        ]
      })
    ]
  });

  return doc;
};

const App = () => {
  const generateNew = () => {
    const document = createDocument({ text: 'hello world' });
    save(document, "test-document-docx-jsx.docx");
  };

  const generateOld = () => {
    const document = createOldDocument({ text: 'hello world' });
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
