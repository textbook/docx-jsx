import * as docx from "docx";

import { numbering, styles } from "./constants";

export const createOldDocument = () => {
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
}
