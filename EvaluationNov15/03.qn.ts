export function getValueByPath(
  obj: object,
  path: string,
  parentKey: string = "",
  result: {} = {}
): string | number {
  if (typeof obj !== "object") return obj;

  for (const key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object")
      getValueByPath(obj[key], path, newKey, result);
    else result[newKey] = obj[key];
  }
  if (!result[path]) return "invalid path";
  return result[path];
}
