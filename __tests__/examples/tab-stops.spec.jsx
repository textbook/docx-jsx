const docx = require("docx");

const {
  createElement,
  Paragraph,
  TabStop,
  TabStopPosition,
  TabStopType,
  TextRun
} = require("../..");

it('should render the tab stop example', () => {
  expect(docx.TabStopPosition.RIGHT).toBe(TabStopPosition.RIGHT);
  expect(newVersion()).toEqual(oldVersion());
});

const oldVersion = () => {
  return new docx.Paragraph({
    children: [
      new docx.TextRun({ text: "Hey everyone", bold: true}), 
      new docx.TextRun("\t11th November 1999")
    ],
    tabStops: [
        {
            type: docx.TabStopType.RIGHT,
            position: docx.TabStopPosition.MAX,
        },
    ],
  });
};

const newVersion = () => (
  <Paragraph>
    <TabStop type={TabStopType.RIGHT} position={TabStopPosition.MAX} />
    <TextRun bold={true}>Hey everyone</TextRun>
    <TextRun text={'\t11th November 1999'} />
  </Paragraph>
);
