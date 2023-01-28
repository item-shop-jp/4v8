import Prism from 'prismjs';
import { Inline } from '../types';
import { createInline } from './inline';

export function textToPrismaToken(text: string, language: string = 'typescript') {
  const tokens = Prism.tokenize(text, Prism.languages[language]);
  const dest: Inline[] = [];
  parseTokens(tokens, dest);
  return dest;
}

export function parseTokens(tokens: Array<string | Prism.Token>, result: Inline[] = []) {
  const codeContents = tokens.forEach((v, i) => {
    if (typeof v === 'string') {
      result.push(createInline('CODE-TOKEN', v, { tokenType: 'string' }));
      return;
    }
    if (Array.isArray(v.content)) {
      parseTokens(v.content as Array<string | Prism.Token>, result);
      return;
    }
    result.push(createInline('CODE-TOKEN', v.content as string, { tokenType: v.type as string }));
  });
  return codeContents;
}
