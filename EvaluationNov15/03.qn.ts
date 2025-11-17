export function getValueByPath(
  obj: Record<string, unknown>,
  path: string,
  parentKey: string = "",
  result: Record<string, string> = {}
): string | number {
  if (typeof obj !== "object") return obj;

  for (const key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    let value = obj[key];
    if (typeof value === "object")
      getValueByPath(value as Record<string, unknown>, path, newKey, result);
    else result[newKey] = value;
  }
  if (!result[path]) return "invalid path";
  return result[path];
}
