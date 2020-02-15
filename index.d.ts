type XmlComponent = import("docx").XmlComponent;

declare module "docx-jsx" {
  export function createElement<T extends XmlComponent>(
    ctor: typeof T,
    attributes: any,
    ...children: XmlComponent[]
  ): T;
};
