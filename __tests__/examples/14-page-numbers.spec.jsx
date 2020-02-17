const docx = require("docx");

const {
  AlignmentType,
  createElement,
  Document,
  Header,
  PageBreak,
  PageNumber,
  Paragraph,
  Section,
  TextRun
} = require("../..");

it('should render the page numbers example', () => {
  expect(newVersion()).toEqual(oldVersion());
});

const oldVersion = () => {
  const doc = new docx.Document();
  doc.addSection({
    headers: {
      default: new docx.Header({
        children: [
          new docx.Paragraph({
            alignment: docx.AlignmentType.RIGHT,
            children: [
              new docx.TextRun("My Title "),
              new docx.TextRun({
                children: ["Page ", docx.PageNumber.CURRENT],
              }),
            ],
          }),
        ],
      }),
      first: new docx.Header({
        children: [
          new docx.Paragraph({
            alignment: docx.AlignmentType.RIGHT,
            children: [
              new docx.TextRun("First Page Header "),
              new docx.TextRun({
                children: ["Page ", docx.PageNumber.CURRENT],
              }),
            ],
          }),
        ],
      }),
    },
    children: [
      new docx.Paragraph({
        children: [new docx.TextRun("First Page"), new docx.PageBreak()],
      }),
      new docx.Paragraph("Second Page"),
    ],
  });
  return doc;
};

const newVersion = () => (
  <Document>
    <Section headers={{
      default: (
        <Header>
          <Paragraph alignment={AlignmentType.RIGHT}>
            <TextRun>My Title </TextRun>
            <TextRun>Page {PageNumber.CURRENT}</TextRun>
          </Paragraph>
        </Header>
      ),
      first: (
        <Header>
          <Paragraph alignment={AlignmentType.RIGHT}>
            <TextRun>First Page Header </TextRun>
            <TextRun>Page {PageNumber.CURRENT}</TextRun>
          </Paragraph>
        </Header>
      )
    }}>
      <Paragraph>
        <TextRun>First Page</TextRun>
        <PageBreak />
      </Paragraph>
      <Paragraph>Second Page</Paragraph>
    </Section>
  </Document>
);
