export function getScrollContainer(scrollContainer?: HTMLElement | string) {
  if (!scrollContainer) {
    return null;
  }
  if (typeof scrollContainer === 'string') {
    return document.querySelector<HTMLElement>(scrollContainer);
  }
  return scrollContainer ?? null;
}
