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
          <TextRun bold={true} text={'Foo Bar'}></TextRun>
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

## How's it going?

This is still in pre-release phase, I'm working through the examples in the docs
one by one...

- [x] Get initial example working
- [x] `Document` properties
- [ ] Review examples to complete this list
- [ ] Handle fragments

[docx]: https://docx.js.org/#/
[jsx]: https://reactjs.org/docs/introducing-jsx.html
[the babel jsx plugin]:
  https://babeljs.io/docs/en/babel-plugin-transform-react-jsx
