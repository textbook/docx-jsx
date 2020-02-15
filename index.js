var docx = require("docx");

var Section = function (props) {
  this.props = props;
  return this;
};

function createElement(ctor, attributes) {
  attributes = attributes || {};
  var children = Array.prototype.slice.call(arguments, 2);
  if (ctor === docx.TextRun) {
    var text = attributes.text || children[0] || "";
    return new docx.TextRun(Object.assign({}, attributes, {
      text: text.replace("\\t", "\t"),
    }));
  }
  if (ctor === docx.Document) {
    var doc = new ctor();
    children.forEach(function (child) {
      if (child instanceof Section) {
        doc.addSection(child.props);
      }
    });
    return doc;
  }
  return new ctor(Object.assign({ children: children }, attributes));
};

module.exports = Object.assign({
  Section: Section,
  createElement: createElement,
}, docx);
