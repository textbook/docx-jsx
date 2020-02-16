# docx-jsx

[docx] is nice. [JSX] is nice. Both together is _really_ nice.

## What is this?

[docx] is a great package for creating .docx files, but the API it exposes for
building the documents is a little awkward, particularly when you're used to
putting hierarchical elements together with XML-like syntax.

This package allows you to write:

```jsx
/** @jsx createElement */
import { createElement, Document, Paragraph, Section, TextRun } from "docx-jsx";

const createDocument = () => {
  return (
    <Document>
      <Section>
        <Paragraph>
          <TextRun>Hello World</TextRun>
          <TextRun bold={true} text={"Foo Bar"}></TextRun>
          <TextRun bold={true}>\tGithub is the best</TextRun>
        </Paragraph>
      </Section>
    </Document>
  );
};
```

Instead of the original example:

```javascript
import { Document, Paragraph, TextRun } from "docx";

const createDocument = () => {
  // Create document
  const doc = new Document();

  // Documents contain sections, you can have multiple sections per document, go here to learn more about sections
  // This simple example will only contain one section
  doc.addSection({
    properties: {},
    children: [
      new Paragraph({
        children: [
          new TextRun("Hello World"),
          new TextRun({
            text: "Foo Bar",
            bold: true
          }),
          new TextRun({
            text: "\tGithub is the best",
            bold: true
          })
        ]
      })
    ]
  });

  return doc;
};
```

## How do I use it?

Install `docx-jsx` and `docx` (which is a peer dependency):

```sh
npm install docx@5 docx-jsx
```

The example above uses `/** @jsx createElement */` to get [the Babel JSX plugin]
to use `docx-jsx`'s `createElement` instead of the default
`React.createElement`. If you are using some other method to process JSX,
consult the appropriate documentation.

You can import the `docx` elements, like `Document` and `TextRun`, from either
`docx` _or_ `docx-jsx`. **However** note that e.g. `Section` does not exist in
the `docx` package, so you _must_ import that from `docx-jsx`.

### ESLint

You will need to disable the rule [`react/style-prop-object`][1] for files
including docx JSX, where the style prop is a string. You can do this by adding
`/* eslint-disable react/style-prop-object */` to the top of each file, for
example.

## How's it going?

This is still in pre-release phase, I'm working through the examples in the docs
one by one...

- [x] Get initial example working
- [x] `Document` properties examples
- [ ] Work through [demos]
  - [x] 1. Basic
  - [x] 2. Declarative styles
  - [x] 3. Numbering and bullet points
  - [ ] 4. Basic table
  - [ ] 5. Images
  - [ ] 6. Page borders
  - [ ] 7. Landscape
  - [ ] 8. Header & footer
  - [ ] 9. Images in header & footer
  - [ ] 10. My CV
  - [ ] ... seems like enough to be getting on with
- [ ] Handle fragments

[1]:
  https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/style-prop-object.md
[demos]: https://github.com/dolanmiu/docx/blob/master/demo
[docx]: https://docx.js.org/#/
[jsx]: https://reactjs.org/docs/introducing-jsx.html
[the babel jsx plugin]:
  https://babeljs.io/docs/en/babel-plugin-transform-react-jsx
