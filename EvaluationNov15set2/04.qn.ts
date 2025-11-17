export function flattenObjectKeys(
  obj: Record<string, unknown>,
  parentKey = "",
  result = {}
): Record<string, unknown> {
  if (typeof obj !== "object") return obj;

  for (const key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof obj[key] === "object") {
      let value = obj[key];
      flattenObjectKeys(value as Record<string, unknown>, newKey, result);
    } else result[newKey] = obj[key];
  }
  return result;
}
