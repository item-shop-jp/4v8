import * as React from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { Header1Props, ParagraphProps } from '../components/blocks';
import { InlineTextProps } from '../components/inlines';
import { LinkPopupProps } from '../components/popups/linkPopup';
import { PalettePopupProps } from '../components/popups/palettePopup';
import { BubbleToolbarProps, GlobalToolbarProps } from '../components/toolbar';

export interface Formats {
  'toolbar/global': React.FC<GlobalToolbarProps>;
  'toolbar/bubble': React.FC<BubbleToolbarProps>;
  'block/paragraph': React.FC<ParagraphProps>;
  'block/header1': React.FC<Header1Props>;
  'inline/text': React.FC<InlineTextProps>;
  'inline/style/bold': () => FlattenSimpleInterpolation;
  'inline/style/underline': () => FlattenSimpleInterpolation;
  'inline/style/strike': () => FlattenSimpleInterpolation;
  'inline/style/code': () => FlattenSimpleInterpolation;
  'inline/style/italic': () => FlattenSimpleInterpolation;
  'inline/style/color': (color: string) => FlattenSimpleInterpolation;
  'inline/style/link': (url?: string) => FlattenSimpleInterpolation;
  'popup/link': React.FC<LinkPopupProps>;
  'popup/palette': React.FC<PalettePopupProps>;
  [key: string]: any;
}
