function sortByKey(arr, key, order = "asc") {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (order === "asc") {
        if (arr[j][key] > arr[j + 1][key]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      } else if (order === "desc") {
        if (arr[j][key] < arr[j + 1][key]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  return arr;
}

console.log(sortByKey([{ age: 30 }, { age: 10 }, { age: 15 }], "age", "desc"));
console.log(sortByKey([{ age: 30 }, { age: 10 }, { age: 15 }], "age", "asc"));
console.log(sortByKey([{ age: 30 }, { age: 10 }, { age: 15 }], "age", "desc"));