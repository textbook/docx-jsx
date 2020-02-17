const docx = require("docx");

const { createElement, Document, Footer, Header, Paragraph, Section } = require("../..");

it('should render the header and footer example', () => {
  expect(newVersion()).toEqual(oldVersion());
});

const oldVersion = () => {
  const doc = new docx.Document();
  doc.addSection({
    headers: {
      default: new docx.Header({
        children: [new docx.Paragraph("Header text")],
      }),
    },
    footers: {
      default: new docx.Footer({
        children: [new docx.Paragraph("Footer text")],
      }),
    },
    children: [new docx.Paragraph("Hello World")],
  });
  return doc;
};

const newVersion = () => (
  <Document>
    <Section>
      <Header>
        <Paragraph>Header text</Paragraph>
      </Header>
      <Paragraph>Hello World</Paragraph>
      <Footer>
        <Paragraph>Footer text</Paragraph>
      </Footer>
    </Section>
  </Document>
);
