const docx = require("docx");

const { createElement, Section } = require("..");

describe("createElement", () => {
  describe("with a TextRun", () => {
    it("creates a basic TextRun", () => {
      const el = createElement(docx.TextRun, {}, "Hello world");
      expect(el).toEqual(new docx.TextRun({ text: "Hello world" }));
    });

    it("creates a styled TextRun", () => {
      const el = createElement(docx.TextRun, { bold: true }, "Hello world");
      expect(el).toEqual(new docx.TextRun({ text: "Hello world", bold: true  }));
    });
  });

  describe("with a Section", () => {
    it("creates a custom object", () => {
      const el = createElement(Section, {}, null);
      expect(el).toEqual(new Section({ children: [null] }));
    });
  });

  describe("with a Document", () => {
    it("handles children correctly", () => {
      const expected = new docx.Document();
      const sectionProps = { children: [] };
      expected.addSection(sectionProps);
      const section = new Section(sectionProps);

      const el = createElement(docx.Document, null, section);

      expect(el).toEqual(expected);
    });
  });
});
