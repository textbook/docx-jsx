const docx = require("docx");

const {
  createElement,
  Document,
  HeadingLevel,
  Paragraph,
  Section,
  TextRun
} = require("../..");

it('should render the introductory example', () => {
  expect(newVersion()).toEqual(oldVersion());
});

const oldVersion = () => {
  const doc = new docx.Document();
  doc.addSection({
    margins: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    children: [
      new docx.Paragraph({
        children: [
          new docx.TextRun("Hello World"),
          new docx.TextRun({
            text: "Foo bar",
            bold: true,
          }),
          new docx.TextRun({
            text: "\tGithub is the best",
            bold: true,
          }),
        ],
      }),
      new docx.Paragraph({
        text: "Hello World",
        heading: docx.HeadingLevel.HEADING_1,
      }),
      new docx.Paragraph("Foo bar"),
      new docx.Paragraph("Github is the best"),
    ],
  });
  return doc;
};

const newVersion = () => (
  <Document>
    <Section margins={{
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }}>
      <Paragraph>
        <TextRun>Hello World</TextRun>
        <TextRun bold={true}>Foo bar</TextRun>
        <TextRun bold={true} text="\tGithub is the best" />
      </Paragraph>
      <Paragraph heading={HeadingLevel.HEADING_1}>Hello World</Paragraph>
      <Paragraph>Foo bar</Paragraph>
      <Paragraph>Github is the best</Paragraph>
    </Section>
  </Document>
);
