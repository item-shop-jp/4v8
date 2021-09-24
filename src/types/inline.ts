export interface Inline {
  id: string;
  attributes: InlineAttributes;
  text: string;
  type: 'TEXT';
  data?: any;
}

export interface InlineAttributes {
  [key: string]: string;
}
