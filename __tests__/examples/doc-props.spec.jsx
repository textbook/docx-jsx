const docx = require("docx");

const { createElement, Document } = require("../..");

it('should render the Document properties example', () => {
  expect(newVersion()).toEqual(oldVersion());
});

const oldVersion = () => {
  return new docx.Document({
    creator: "Dolan Miu",
    description: "My extremely interesting document",
    title: "My Document",
  });
};

const newVersion = () => (
  <Document
    creator="Dolan Miu"
    description="My extremely interesting document"
    title="My Document"
  ></Document>
);
