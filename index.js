var docx = require("docx");

var Section = function (props) {
  this.props = props;
  return this;
};

function createElement(ctor, attributes) {
  var children = Array.prototype.slice.call(arguments, 2);
  if (ctor === docx.TextRun) {
    var text = singleTextChild(children)
      ? children[0]
      : attributes.text;
    return new ctor(Object.assign({}, attributes, {
      text: (text || "").replace("\\t", "\t"),
    }));
  }
  if (ctor === docx.Paragraph && singleTextChild(children)) {
    children = [createElement(docx.TextRun, null, children[0])];
  }
  if (ctor === docx.Document) {
    var doc = new ctor(attributes || undefined);
    children.forEach(function (child) {
      if (child instanceof Section) {
        doc.addSection(child.props);
      }
    });
    return doc;
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
