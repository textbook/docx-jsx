var docx = require("docx");

var Section = function (props) {
  this.props = props;
  return this;
};

function createDocument(attributes, children) {
  var doc = new docx.Document(attributes || undefined);
  children.forEach(function (child) {
    doc.addSection(child.props);
  });
  return doc;
}

function createElement(ctor, attributes) {
  var children = Array.prototype.slice.call(arguments, 2);
  switch (ctor) {
    case docx.Document:
      return createDocument(attributes, children);
    case docx.Table:
      return new ctor(Object.assign({ rows: children }, attributes));
    case docx.TextRun:
      var text = singleTextChild(children)
        ? children[0]
        : attributes.text;
      return new ctor(Object.assign({}, attributes, {
        text: text ? text.replace("\\t", "\t") : undefined
      }));
  }
  if (ctor === docx.Paragraph && singleTextChild(children)) {
    children = [createElement(docx.TextRun, null, children[0])];
  }
  return new ctor(Object.assign({ children: children }, attributes));
};

function singleTextChild(children) {
  return children.length === 1 && typeof children[0] === 'string';
}

module.exports = Object.assign({
  Section: Section,
  createElement: createElement,
}, docx);
