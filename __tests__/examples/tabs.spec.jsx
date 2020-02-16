
const docx = require("docx");

const { createElement, TextRun } = require("../..");

describe('TextRun tab handling', () => {
  it('works correctly in children', () => {
    expect(<TextRun>\tHello world</TextRun>)
      .toEqual(new docx.TextRun({ text: "\tHello world" }));
  });

  it('works correctly in text prop', () => {
    expect(<TextRun text={'\tHello world'} />)
      .toEqual(new docx.TextRun({ text: "\tHello world" }));
  });
});
