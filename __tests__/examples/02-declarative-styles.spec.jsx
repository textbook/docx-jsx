const docx = require("docx");

const { createElement, Document, Paragraph, Section, TextRun } = require("../..");

it('should render the declarative styles example', () => {
  expect(newVersion()).toEqual(oldVersion());
});

const styles = {
  paragraphStyles: [
    {
      id: "Heading1",
      name: "Heading 1",
      basedOn: "Normal",
      next: "Normal",
      quickFormat: true,
      run: {
        size: 28,
        bold: true,
        italics: true,
        color: "red",
      },
      paragraph: {
        spacing: {
          after: 120,
        },
      },
    },
    {
      id: "Heading2",
      name: "Heading 2",
      basedOn: "Normal",
      next: "Normal",
      quickFormat: true,
      run: {
        size: 26,
        bold: true,
        underline: {
          type: docx.UnderlineType.DOUBLE,
          color: "FF0000",
        },
      },
      paragraph: {
        spacing: {
          before: 240,
          after: 120,
        },
      },
    },
    {
      id: "aside",
      name: "Aside",
      basedOn: "Normal",
      next: "Normal",
      run: {
        color: "999999",
        italics: true,
      },
      paragraph: {
        indent: {
          left: 720,
        },
        spacing: {
          line: 276,
        },
      },
    },
    {
      id: "wellSpaced",
      name: "Well Spaced",
      basedOn: "Normal",
      quickFormat: true,
      paragraph: {
        spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
      },
    },
    {
      id: "ListParagraph",
      name: "List Paragraph",
      basedOn: "Normal",
      quickFormat: true,
    },
  ],
};

const numbering = {
  config: [
    {
      reference: "my-crazy-numbering",
      levels: [
        {
          level: 0,
          format: "lowerLetter",
          text: "%1)",
          alignment: docx.AlignmentType.LEFT,
        },
      ],
    },
  ],
};

const oldVersion = () => {
  const doc = new docx.Document({
    creator: "Clippy",
    title: "Sample Document",
    description: "A brief example of using docx",
    styles: styles,
    numbering: numbering,
  });

  doc.addSection({
    children: [
      new docx.Paragraph({
        text: "Test heading1, bold and italicized",
        heading: docx.HeadingLevel.HEADING_1,
      }),
      new docx.Paragraph("Some simple content"),
      new docx.Paragraph({
        text: "Test heading2 with double red underline",
        heading: docx.HeadingLevel.HEADING_2,
      }),
      new docx.Paragraph({
        text: "Option1",
        numbering: { reference: "my-crazy-numbering", level: 0 },
      }),
      new docx.Paragraph({
        text: "Option5 -- override 2 to 5",
        numbering: { reference: "my-crazy-numbering", level: 0 },
      }),
      new docx.Paragraph({
        text: "Option3",
        numbering: {
          reference: "my-crazy-numbering",
          level: 0,
        },
      }),
      new docx.Paragraph({
        children: [
          new docx.TextRun({
            text: "Some monospaced content",
            font: {
              name: "Monospace",
            },
          }),
        ],
      }),
      new docx.Paragraph({
        text: "An aside, in light gray italics and indented",
        style: "aside",
      }),
      new docx.Paragraph({
        text: "This is normal, but well-spaced text",
        style: "wellSpaced",
      }),
      new docx.Paragraph({
        children: [
          new docx.TextRun({
            text: "This is a bold run,",
            bold: true,
          }),
          new docx.TextRun(" switching to normal "),
          new docx.TextRun({
            text: "and then underlined ",
            underline: {},
          }),
          new docx.TextRun({
            text: "and back to normal.",
          }),
        ],
      }),
    ],
  });
  return doc;
};

const newVersion = () => (
  <Document
    creator="Clippy"
    title="Sample Document"
    description="A brief example of using docx"
    styles={styles}
    numbering={numbering}
  >
    <Section>
      <Paragraph
        text="Test heading1, bold and italicized"
        heading={docx.HeadingLevel.HEADING_1}
      />
      <Paragraph>Some simple content</Paragraph>
      <Paragraph
        text="Test heading2 with double red underline"
        heading={docx.HeadingLevel.HEADING_2}
      />
      <Paragraph
        text="Option1"
        numbering={{ reference: "my-crazy-numbering", level: 0 }}
      />
      <Paragraph
        text="Option5 -- override 2 to 5"
        numbering={{ reference: "my-crazy-numbering", level: 0 }}
      />
      <Paragraph
        text="Option3"
        numbering={{ reference: "my-crazy-numbering", level: 0 }}
      />
      <Paragraph>
        <TextRun font={{ name: "Monospace" }}>Some monospaced content</TextRun>
      </Paragraph>
      <Paragraph
        text="An aside, in light gray italics and indented"
        style="aside"
      />
      <Paragraph
        text="This is normal, but well-spaced text"
        style="wellSpaced"
      />
      <Paragraph>
        <TextRun text="This is a bold run," bold={true} />
        <TextRun> switching to normal </TextRun>
        <TextRun text="and then underlined " underline={{}} />
        <TextRun text="and back to normal." />
      </Paragraph>
    </Section>
  </Document>
);
