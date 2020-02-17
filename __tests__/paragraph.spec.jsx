const docx = require("docx");

const { createElement, Paragraph } = require("..");

describe('Paragraph', () => {
  it('supports single text children', () => {
    expect(<Paragraph>Foo bar</Paragraph>).toEqual(new docx.Paragraph("Foo bar"));
  });

  it('supports multiple text children', () => {
    expect(<Paragraph>Hello {'world'}</Paragraph>)
      .toEqual(new docx.Paragraph({ children: [new docx.TextRun("Hello "), new docx.TextRun("world")] }))
  });
});
