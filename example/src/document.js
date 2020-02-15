/** @jsx createElement */
import { createElement, Document, Paragraph, Section, TextRun } from "docx-jsx";

export const createDocument = ({ text }) => (
  <Document>
    <Section>
      <Paragraph>
        <TextRun>{text}</TextRun>
        <TextRun bold={true} text={'Foo Bar'}></TextRun>
        <TextRun bold={true}>\tGithub is the best</TextRun>
      </Paragraph>
    </Section>
  </Document>
);
