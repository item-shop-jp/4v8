export function copyObject<T extends Object>(object: T): T {
  const json = JSON.stringify(object);
  return JSON.parse(json);
}
