const docx = require("docx");

const {
  createElement,
  Document,
  PageOrientation,
  Paragraph,
  Section
} = require("../..");

it('should render the introductory example', () => {
  expect(newVersion()).toEqual(oldVersion());
});

const oldVersion = () => {
  const doc = new docx.Document();
  doc.addSection({
    size: {
      orientation: docx.PageOrientation.LANDSCAPE,
    },
    children: [new docx.Paragraph("Hello World")],
  });
  return doc;
};

const newVersion = () => (
  <Document>
    <Section size={{ orientation: PageOrientation.LANDSCAPE }}>
      <Paragraph>Hello World</Paragraph>
    </Section>
  </Document>
);
