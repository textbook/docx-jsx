var docx = require("docx");

var Section = function (props) {
  this.props = props;
  return this;
};

var TabStop = function (props) {
  this.props = props;
  return this;
}

function partition(array, predicate) {
  var yes = [], no = [];
  array.forEach(function (item) {
    if (predicate(item)) {
      yes.push(item);
    } else {
      no.push(item);
    }
  });
  return {yes: yes, no: no};
}

function createDocument(attributes, children) {
  var doc = new docx.Document(attributes || undefined);
  children.forEach(function (child) {
    doc.addSection(child.props);
  });
  return doc;
}

function mergeDefault(attributes, prop, default_) {
  var values = attributes && attributes[prop] 
    ? attributes[prop] 
    : undefined;
  if (default_) {
    values = values || {};
    values.default = default_;
  }
  return values;
}

function createSection(attributes, children) {
  var header, footer;
  children = children.filter(function (child) {
    if (child instanceof docx.Header) {
      header = child;
    } else if (child instanceof docx.Footer) {
      footer = child;
    } else {
      return true;
    }
  });
  return new Section(Object.assign(
    {
      children: children,
      footers: mergeDefault(attributes, 'footers', footer),
      headers: mergeDefault(attributes, 'headers', header)
    },
    attributes)
  );
}

function createParagraph(attributes, children) {
  var tabStops = partition(children, function (child) {
    return child instanceof TabStop;
  });
  return new docx.Paragraph(Object.assign({
    children: tabStops.no.map(stringToTextRun),
    tabStops: tabStops.yes.map(function (tabStop) {
      return tabStop.props;
    }),
  }, attributes));
}

function createElement(ctor, attributes) {
  var children = Array.prototype.slice.call(arguments, 2);
  switch (ctor) {
    case docx.Document:
      return createDocument(attributes, children);
    case docx.Paragraph:
      return createParagraph(attributes, children);
    case Section:
      return createSection(attributes, children);
    case docx.Table:
      return new ctor(Object.assign({ rows: children }, attributes));
  }
  if (ctor === docx.TextRun && attributes && attributes.text) {
    children = [attributes.text];
  }
  return new ctor(Object.assign({ children: children }, attributes));
};

function stringToTextRun(child) {
  return typeof child === 'string'
    ? createElement(docx.TextRun, null, child)
    : child;
}

module.exports = Object.assign({}, docx, {
  createElement: createElement,
  Section: Section,
  TabStop: TabStop,
});
