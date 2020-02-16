const docx = require("docx");

const DocxJsx = require("..");

describe("createElement", () => {
  describe("with a TextRun", () => {
    it("creates a basic TextRun", () => {
      const el = DocxJsx.createElement(docx.TextRun, {}, "Hello world");
      expect(el).toEqual(new docx.TextRun({ text: "Hello world" }));
    });

    it("creates a styled TextRun", () => {
      const el = DocxJsx.createElement(docx.TextRun, { bold: true }, "Hello world");
      expect(el).toEqual(new docx.TextRun({ text: "Hello world", bold: true  }));
    });
  });

  describe("with a Section", () => {
    it("creates a custom object", () => {
      const el = DocxJsx.createElement(DocxJsx.Section, {}, null);
      expect(el).toEqual(new DocxJsx.Section({ children: [null] }));
    });
  });

  describe("with a Document", () => {
    it("handles children correctly", () => {
      const expected = new docx.Document();
      const sectionProps = { children: [] };
      expected.addSection(sectionProps);
      const section = new DocxJsx.Section(sectionProps);

      const el = DocxJsx.createElement(docx.Document, null, section);

      expect(el).toEqual(expected);
    });
  });
});
