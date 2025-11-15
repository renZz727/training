import { filterProducts } from "./05.qn.js";
interface TestCase {
  expected: { name: string; price: number }[];
  input: { name: string; price: number }[];
  searchText: string;
}
const testCases: TestCase[] = [
  {
    expected: [{ name: "Mouse", price: 800 }],
    input: [
      { name: "Laptop", price: 60000 },
      { name: "Mouse", price: 800 },
      { name: "Monitor", price: 12000 },
      { name: "Monitor", price: 4000 },
    ],
    searchText: "mouse",
  },
  {
    expected: [{ name: "Laptop", price: 60000 }],
    input: [
      { name: "Laptop", price: 60000 },
      { name: "Mouse", price: 800 },
      { name: "Monitor", price: 12000 },
      { name: "Monitor", price: 4000 },
    ],
    searchText: "laptop",
  },
  {
    expected: [
      { name: "Monitor", price: 12000 },
      { name: "Monitor", price: 4000 },
    ],
    input: [
      { name: "Laptop", price: 60000 },
      { name: "Mouse", price: 800 },
      { name: "Monitor", price: 12000 },
      { name: "Monitor", price: 4000 },
    ],
    searchText: "monitor",
  },
  {
    expected: [{ name: "pendrive", price: 12000 }],
    input: [
      { name: "Laptop", price: 60000 },
      { name: "pendrive", price: 400 },
      { name: "Monitor", price: 12000 },
      { name: "Monitor", price: 4000 },
    ],
    searchText: "monitor",
  },
  {
    expected: [{ name: "pencil", price: 12000 }],
    input: [
      { name: "Laptop", price: 60000 },
      { name: "pendrive", price: 400 },
      { name: "Pencil", price: 12 },
      { name: "Monitor", price: 4000 },
    ],
    searchText: "monitor",
  },
];

test(testCases);
function test(testCases: TestCase[]): void {
  testCases.forEach((testCase, index) => {
    const result = filterProducts(testCase.input, testCase.searchText);
    console.log(testCase.expected, " ", result);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    if (isSame) console.log(`TestCase ${index + 1} passed`);
    else console.log(`TestCase ${index + 1} failed`);
  });
}
