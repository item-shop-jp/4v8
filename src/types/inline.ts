export interface Inline {
  attributes: InlineAttributes;
  text: string;
  type: 'TEXT';
}

export interface InlineAttributes {
  [key: string]: string;
}
