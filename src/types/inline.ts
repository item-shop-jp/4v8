export type InlineType = 'TEXT' | 'BR';

export interface Inline {
  id: string;
  attributes: InlineAttributes;
  text: string;
  type: InlineType;
  data?: any;
}

export interface InlineAttributes {
  [key: string]: string;
}
