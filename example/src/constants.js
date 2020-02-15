import * as docx from "docx";

export const styles = {
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

export const numbering = {
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
