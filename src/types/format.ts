import * as React from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import {
  Header1Props,
  Header2Props,
  Header3Props,
  Header4Props,
  Header5Props,
  Header6Props,
  TextProps,
} from '../components/blocks';
import { InlineTextProps } from '../components/inlines';
import { BubbleToolbarProps, GlobalToolbarProps } from '../components/toolbar';

export interface Formats {
  'toolbar/global': React.FC<GlobalToolbarProps>;
  'toolbar/bubble': React.FC<BubbleToolbarProps>;
  'block/text': React.FC<TextProps>;
  'block/header1': React.FC<Header1Props>;
  'block/header2': React.FC<Header2Props>;
  'block/header3': React.FC<Header3Props>;
  'block/header4': React.FC<Header4Props>;
  'block/header5': React.FC<Header5Props>;
  'block/header6': React.FC<Header6Props>;
  'inline/text': React.FC<InlineTextProps>;
  'style/bold': FlattenSimpleInterpolation;
  'style/underline': FlattenSimpleInterpolation;
  'style/strike': FlattenSimpleInterpolation;
  [key: string]: any;
}
