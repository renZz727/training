export function sortMixedNested(
  arr: (number | number[])[]
): (number | number[])[] {
  const sorted = arr.flat(Infinity) as number[];
  sorted.sort((a, b) => a - b);
  let count = 0;
  function recursion(arr: (number | (number | number[])[])[]): void {
    for (let i = 0; i < arr.length; i++) {
      if (!Array.isArray(arr[i]) && typeof arr[i] === "number") {
        arr[i] = sorted[count];
        count++;
      } else {
        recursion(arr[i] as (number | number[])[]);
      }
    }
  }
  recursion(arr);
  return arr;
}
