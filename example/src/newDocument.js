/** @jsx createElement */
/* eslint-disable react/style-prop-object */
import { 
  createElement,
  Document,
  HeadingLevel,
  Paragraph,
  Section,
  TextRun,
} from "docx-jsx";

import { numbering, styles } from "./constants";

export const createNewDocument = () => (
  <Document
    creator="Clippy"
    title="Sample Document"
    description="A brief example of using docx"
    styles={styles}
    numbering={numbering}
  >
    <Section>
      <Paragraph
        text="Test heading1, bold and italicized"
        heading={HeadingLevel.HEADING_1}
      />
      <Paragraph>Some simple content</Paragraph>
      <Paragraph
        text="Test heading2 with double red underline"
        heading={HeadingLevel.HEADING_2}
      />
      <Paragraph
        text="Option1"
        numbering={{ reference: "my-crazy-numbering", level: 0 }}
      />
      <Paragraph
        text="Option5 -- override 2 to 5"
        numbering={{ reference: "my-crazy-numbering", level: 0 }}
      />
      <Paragraph
        text="Option3"
        numbering={{ reference: "my-crazy-numbering", level: 0 }}
      />
      <Paragraph>
        <TextRun font={{ name: "Monospace" }}>Some monospaced content</TextRun>
      </Paragraph>
      <Paragraph
        text="An aside, in light gray italics and indented"
        style="aside"
      />
      <Paragraph
        text="This is normal, but well-spaced text"
        style="wellSpaced"
      />
      <Paragraph>
        <TextRun text="This is a bold run," bold={true} />
        <TextRun> switching to normal </TextRun>
        <TextRun text="and then underlined " underline={{}} />
        <TextRun text="and back to normal." />
      </Paragraph>
    </Section>
  </Document>
);
