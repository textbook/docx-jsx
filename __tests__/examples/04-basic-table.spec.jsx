const docx = require("docx");

const {
  createElement,
  Document,
  Paragraph,
  Section,
  Table,
  TableCell,
  TableRow
} = require("../..");

it('should render the introductory example', () => {
  expect(newVersion()).toEqual(oldVersion());
});

const oldVersion = () => {
  const doc = new docx.Document();
  const table = new docx.Table({
    rows: [
      new docx.TableRow({
        children: [
          new docx.TableCell({
            children: [new docx.Paragraph("Hello")],
          }),
          new docx.TableCell({
            children: [],
          }),
        ],
      }),
      new docx.TableRow({
        children: [
          new docx.TableCell({
            children: [],
          }),
          new docx.TableCell({
            children: [new docx.Paragraph("World")],
          }),
        ],
      }),
    ],
  });

  doc.addSection({
    children: [table],
  });
  return doc;
};

const newVersion = () => (
  <Document>
    <Section>
      <Table>
        <TableRow>
          <TableCell><Paragraph>Hello</Paragraph></TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableCell></TableCell>
          <TableCell><Paragraph>World</Paragraph></TableCell>
        </TableRow>
      </Table>
    </Section>
  </Document>
);
