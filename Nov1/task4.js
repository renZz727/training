function flattenNestedArray(obj) {
  let newObj = {};
  for (let item in obj) {
    if (typeof item === "object") flattenNestedArray(obj);

    for (let item in obj) {
      newObj[item] = obj[item];
    }
  }
  console.log(newObj);
}

flattenNestedArray({ a: 1, b: { c: 2, d: { e: 3 } } });
