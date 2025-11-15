import { sortMixedNested } from "./03.qn.js";
interface TestCase {
  expected: number[] | number[][];
  input: number[]| number[][];
}

const testCases: TestCase[] = [
  {
    expected: [1, [2, [3, 4]], 5],
    input: [3, [2, [5, 1]], 4],
  },{
    expected: [ 2, [ 3, [ 4 ] ], 5 ],
    input: [3, [2, [5]], 4],
  },{
    expected: [ [ 1, [ 2, 4 ] ], 5 ],
    input: [[2, [5, 1]], 4],
  },{
    expected: [ 1, [ 2, [ 3, 5 ] ] ],
    input: [3, [2, [5, 1]]],
  },{
    expected: [ 2, [ 3 ], 4 ],
    input: [3, [2], 4],
  },{
    expected: [ 3, 4 ],
    input: [3, 4],
  },{
    expected: [ 1, [ 2, [ 3, 4 ] ], 5 ],
    input: [1, [2, [3, 4]], 5],
  },{
    expected: [ 1, [ 4, [ 5, [24, 30, 34], 54 ] ], 96 ],
    input: [30, [24, [5,[34, 54,96] 1]], 4],
  },{
    expected: [3],
    input: [3],
  },{
    expected: [],
    input: [],
  },
];

test(testCases);
function test(testCases: TestCase[]): void {
  testCases.forEach((testCase, index) => {
    const result = sortMixedNested(testCase.input);
    const isSame = JSON.stringify(result) === JSON.stringify(testCase.expected);
    console.log(
      isSame ? `Testcase ${index + 1} passed` : `Testcase ${index + 1} failed`
    );
  });
}
