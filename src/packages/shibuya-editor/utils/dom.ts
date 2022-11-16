export function getHtmlElement(el?: HTMLElement | string) {
  if (!el) {
    return null;
  }
  if (typeof el === 'string') {
    return document.querySelector<HTMLElement>(el);
  }
  return el ?? null;
}
