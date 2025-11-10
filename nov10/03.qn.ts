type test = {expected: boolean, a: number[] | number | string, b: number[] | number | boolean| string }
const testCases: test[]= [
  { expected: true, a: [1, 2, 3], b: [1, 2, 3] },
  { expected: false, a: [1, 2, 3], b: [1, 3, 2] },
  { expected: false, a: 1, b: "1" },
  {
    expected: true,
    a: { a: 2, b: [22, 53, 21, { b: 1 }] },
    b: { a: 2, b: [22, 53, 21, { b: 1 }] },
  },
  {
    expected: false,
    a: { a: 2, b: [22, 532, 21, { b: 2 }] },
    b: { a: 2, b: [22, 53, 21, { b: 1 }] },
  },
  { expected: true, a: 1, b: 1 },
  { expected: false, a: 12345, b: 1234 },
  { expected: true, a: { a: 1, b: 2 }, b: { a: 1, b: 2 } },
  { expected: false, a: { a: 1, b: 2 }, b: { a: 2, b: 1 } },
  { expected: true, a: {}, b: {} },
  { expected: false, a: { a: 1 }, b: ["a", 1] },
  { expected: true, a: "hello", b: "hello" },
  { expected: false, a: "hello", b: "hii" },
  { expected: false, a: undefined, b: null },
  { expected: false, a: "1,3,4", b: [1, 3, 4] },
  { expected: false, a: "1,3,4", b: true },
  { expected: false, a: false, b: [1, 3, 4] },
];

test(testCases);
function test(testCases: test[]) : void{
  testCases.forEach((testCase, index) => {
    const result = deepEqual(testCase.a :test, testCase.b : test);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function deepEqual(a: number[] | string , b: number[] | string ) : boolean{
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

  function deepClone(obj) : string{
    if (obj === null || typeof obj !== "object") return obj;
    let copy: string = "";
    for (let key in obj) {
      if (typeof obj[key] === "object") deepClone(obj[key]);
      copy += `${key}.${obj[key]}`;
    }
    return copy;
  }
  return true;
}
