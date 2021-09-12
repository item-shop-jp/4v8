import { Inline } from '../types/inline';

export function convertInlineArrayToHTML(contents: Inline[]): string {
  let html = '';
  contents.forEach((v) => {
    switch (v.type) {
      case 'TEXT':
        html = v.text.replace('\n', '<br>');
        break;
      default:
        break;
    }
  });
  return html;
}
