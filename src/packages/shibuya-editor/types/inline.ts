export type InlineType = 'TEXT' | 'CODE-TOKEN';

export interface Inline {
  id: string;
  attributes: InlineAttributes;
  text: string;
  type: InlineType;
  isEmbed: boolean;
}

export interface InlineAttributes {
  [key: string]: any;
}
