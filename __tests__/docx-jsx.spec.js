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

  describe("with headers and footers", () => {
    it("merges the various header options", () => {
      const default_ = new docx.Header({});
      const first = new docx.Header({});
      const even = new docx.Header({});

      expect(createElement(Section, { headers: { first, even } }, default_))
        .toEqual(createElement(Section, { headers: { first, even, default: default_ } }));
      expect(createElement(Section, null, default_))
        .toEqual(createElement(Section, { headers: { default: default_ } }));
      expect(createElement(Section, {}, default_))
        .toEqual(createElement(Section, { headers: { default: default_ } }));
    });

    it("merges the various footer options", () => {
      const default_ = new docx.Footer({});
      const first = new docx.Footer({});
      const even = new docx.Footer({});

      expect(createElement(Section, { footers: { first, even } }, default_))
        .toEqual(createElement(Section, { footers: { first, even, default: default_ } }));
      expect(createElement(Section, null, default_))
        .toEqual(createElement(Section, { footers: { default: default_ } }));
      expect(createElement(Section, {}, default_))
        .toEqual(createElement(Section, { footers: { default: default_ } }));
    });
  });
});
