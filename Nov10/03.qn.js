function deepEqual(a, b) {
  if (typeof a !== typeof b) return false;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
  } else if (typeof a === "object" && typeof b === "object") {
    for (let key in a) {
      if (!b.hasOwnProperty(key)) return false;
      if (deepClone(a[key]) !== deepClone(b[key])) return false;
    }
  } else if (a !== b) return false;

  function deepClone(obj) {
    if (obj === null || typeof obj !== "object") return obj;
    copy = "";
    for (let key in obj) {
      if (typeof obj[key] === "object") deepClone(obj[key]);
      copy += `${key}.${obj[key]}`;
    }
    return copy;
  }
  return true;
}
console.log(deepEqual([1, 2, 3], [1, 2, 3]));
console.log(deepEqual([1, 2, 3], [1, 3, 3]));
console.log(deepEqual(1, "1"));
console.log(deepEqual(1, 1));
console.log(deepEqual({ x: 1, y: { z: 2 } }, { x: 1, y: { z: 2 } }));
