const docx = require("docx");

const { createElement, Document, Paragraph, Section, TextRun } = require("../..");

it('should render the introductory example', () => {
  expect(newVersion()).toEqual(oldVersion());
});

const numbering = {
  config: [
    {
      reference: "my-crazy-numbering",
      levels: [
        {
          level: 0,
          format: "upperRoman",
          text: "%1",
          alignment: docx.AlignmentType.START,
          style: {
            paragraph: {
              indent: { left: 720, hanging: 260 },
            },
          },
        },
        {
          level: 1,
          format: "decimal",
          text: "%2.",
          alignment: docx.AlignmentType.START,
          style: {
            paragraph: {
              indent: { left: 1440, hanging: 980 },
            },
          },
        },
        {
          level: 2,
          format: "lowerLetter",
          text: "%3)",
          alignment: docx.AlignmentType.START,
          style: {
            paragraph: {
              indent: { left: 2160, hanging: 1700 },
            },
          },
        },
        {
          level: 3,
          format: "upperLetter",
          text: "%4)",
          alignment: docx.AlignmentType.START,
          style: {
            paragraph: {
              indent: { left: 2880, hanging: 2420 },
            },
          },
        },
      ],
    },
  ],
};

const oldVersion = () => {
  const doc = new docx.Document({
    numbering: numbering,
  });

  doc.addSection({
    children: [
      new docx.Paragraph({
        text: "Hey you",
        numbering: {
          reference: "my-crazy-numbering",
          level: 0,
        },
      }),
      new docx.Paragraph({
        text: "What's up fam",
        numbering: {
          reference: "my-crazy-numbering",
          level: 1,
        },
      }),
      new docx.Paragraph({
        text: "Hello World 2",
        numbering: {
          reference: "my-crazy-numbering",
          level: 1,
        },
      }),
      new docx.Paragraph({
        text: "Yeah boi",
        numbering: {
          reference: "my-crazy-numbering",
          level: 2,
        },
      }),
      new docx.Paragraph({
        text: "Hey you",
        bullet: {
          level: 0,
        },
      }),
      new docx.Paragraph({
        text: "What's up fam",
        bullet: {
          level: 1,
        },
      }),
      new docx.Paragraph({
        text: "Hello World 2",
        bullet: {
          level: 2,
        },
      }),
      new docx.Paragraph({
        text: "Yeah boi",
        bullet: {
          level: 3,
        },
      }),
      new docx.Paragraph({
        text: "101 MSXFM",
        numbering: {
          reference: "my-crazy-numbering",
          level: 3,
        },
      }),
      new docx.Paragraph({
        text: "back to level 1",
        numbering: {
          reference: "my-crazy-numbering",
          level: 1,
        },
      }),
      new docx.Paragraph({
        text: "back to level 0",
        numbering: {
          reference: "my-crazy-numbering",
          level: 0,
        },
      }),
    ],
  });
  return doc;
};

const newVersion = () => (
  <Document numbering={numbering}>
    <Section>
      <Paragraph
        text="Hey you"
        numbering={{ reference: "my-crazy-numbering", level: 0 }}
      />
      <Paragraph
        text="What's up fam"
        numbering={{ reference: "my-crazy-numbering", level: 1 }}
      />
      <Paragraph
        text="Hello World 2"
        numbering={{ reference: "my-crazy-numbering", level: 1 }}
      />
      <Paragraph
        text="Yeah boi"
        numbering={{ reference: "my-crazy-numbering", level: 2 }}
      />
      <Paragraph
        text="Hey you"
        bullet={{ level: 0 }}
      />
      <Paragraph
        text="What's up fam"
        bullet={{ level: 1 }}
      />
      <Paragraph
        text="Hello World 2"
        bullet={{ level: 2 }}
      />
      <Paragraph
        text="Yeah boi"
        bullet={{ level: 3 }}
      />
      <Paragraph
        text="101 MSXFM"
        numbering={{ reference: "my-crazy-numbering", level: 3 }}
      />
      <Paragraph
        text="back to level 1"
        numbering={{ reference: "my-crazy-numbering", level: 1 }}
      />
      <Paragraph
        text="back to level 0"
        numbering={{ reference: "my-crazy-numbering", level: 0 }}
      />
    </Section>
  </Document>
);
