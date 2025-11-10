type sortByReturn = { id?: number; age?: number };
function sortByKey(
  arr: sortByReturn[],
  key: "id" | "age",
  order: string = "asc"
): sortByReturn[] | string {
  if (
    (typeof arr === "object" && !Array.isArray(arr)) ||
    typeof arr !== "object" ||
    typeof key !== "string" ||
    typeof order !== "string"
  )
    return "invalid input";
  if (arr.length === 0) return "array is empty";
    // if (key === "") return "no key provided";
  const noKey: sortByReturn[] = [];
  arr.forEach((obj) => {
    if (obj) {
      if (!obj.hasOwnProperty(key)) {
        noKey.push(obj);
        let index = arr.indexOf(obj);
        arr.splice(index, 1);
      }
    }
  });

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (order === "asc") {
        console.log(arr[j]);
        if (arr[j][key] > arr[j + 1][key]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      } else if (order === "desc") {
        if (arr[j][key] < arr[j + 1][key]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }

  //   for (key in noKey) {
  //     arr.push(noKey[key]);
  //   }
  return arr;
}

sortByKey([{ age: 30 }, { age: 20 }], "age", "asc");
