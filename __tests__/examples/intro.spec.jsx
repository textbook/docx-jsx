const docx = require("docx");

const { createElement, Document, Paragraph, Section, TextRun } = require("../..");

it('should render the introductory example', () => {
  expect(newVersion()).toEqual(oldVersion());
});

const oldVersion = () => {
  const doc = new docx.Document();
  doc.addSection({
    properties: {},
    children: [
      new docx.Paragraph({
        children: [
          new docx.TextRun("Hello World"),
          new docx.TextRun({
            text: "Foo Bar",
            bold: true
          }),
          new docx.TextRun({
            text: "\tGithub is the best",
            bold: true
          })
        ]
      })
    ]
  });
  return doc;
};

const newVersion = () => (
  <Document>
    <Section>
      <Paragraph>
        <TextRun>Hello World</TextRun>
        <TextRun bold={true} text={'Foo Bar'}></TextRun>
        <TextRun bold={true}>\tGithub is the best</TextRun>
      </Paragraph>
    </Section>
  </Document>
);
