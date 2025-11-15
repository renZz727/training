export function even(num: number): boolean {
  const rem = num / 2;
  if (rem.toString().split(".").length === 2) return false;
  return true;
}
