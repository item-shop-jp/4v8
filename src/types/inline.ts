export type InlineType = 'TEXT';

export interface Inline {
  id: string;
  attributes: InlineAttributes;
  text: string;
  type: InlineType;
  isEmbed: boolean;
  data?: any;
}

export interface InlineAttributes {
  [key: string]: string;
}
