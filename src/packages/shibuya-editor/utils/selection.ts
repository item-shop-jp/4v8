export const contains = (parent: Node, descendant: Node) => {
  try {
    // Firefox inserts inaccessible nodes around video elements
    descendant.parentNode; // eslint-disable-line no-unused-expressions
  } catch (e) {
    return false;
  }
  return parent.contains(descendant);
};
