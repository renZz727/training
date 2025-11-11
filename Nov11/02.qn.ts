type TestCase<Tasks, Limit, Expected> = {
  expected: Expected;
  input: Tasks;
  limit: Limit;
};

const testCases: TestCase<
  boolean | string,
  Promise<unknown>[],
  number | boolean | string
>[] = [
  {
    expected: ["test1", "test2"],
    input: [
      new Promise((resolve) => resolve("test1")),
      new Promise((resolve) => resolve("test2")),
      new Promise((resolve) => resolve("test3")),
    ],
    limit: 2,
  },
  {
    expected: ["test1", "test2", "test3"],
    input: [
      new Promise((resolve) => resolve("test1")),
      new Promise((resolve) => resolve("test2")),
      new Promise((resolve) => resolve("test3")),
    ],
    limit: 3,
  },
  {
    expected: ["test4", "test3"],
    input: [
      new Promise((resolve) => resolve("test4")),
      new Promise((resolve) => resolve("test3")),
      new Promise((resolve) => resolve("test1")),
    ],
    limit: 2,
  },
  {
    expected: [],
    input: [
      new Promise((resolve) => resolve("test4")),
      new Promise((resolve) => resolve("test3")),
      new Promise((resolve) => resolve("test1")),
    ],
    limit: 0,
  },
  {
    expected: false,
    input: [
      new Promise((resolve) => resolve("test4")),
      new Promise((resolve) => resolve("test3")),
      new Promise((resolve) => resolve("test1")),
    ],
    limit: false,
  },
  {
    expected: false,
    input: [
      new Promise((resolve) => resolve("test4")),
      new Promise((resolve) => resolve("test3")),
      new Promise((resolve) => resolve("test1")),
    ],
    limit: true,
  },
  {
    expected: false,
    input: [
      new Promise((resolve) => resolve("test4")),
      new Promise((resolve) => resolve("test3")),
      new Promise((resolve) => resolve("test1")),
    ],
    limit: null,
  },
  {
    expected: false,
    input: [
      new Promise((resolve) => resolve("test4")),
      new Promise((resolve) => resolve("test3")),
      new Promise((resolve) => resolve("test1")),
    ],
    limit: undefined,
  },
  {
    expected: false,
    input: [
      new Promise((resolve) => resolve("test4")),
      new Promise((resolve) => resolve("test3")),
      new Promise((resolve) => resolve("test1")),
    ],
    limit: "2",
  },
  {
    expected: false,
    input: [],
    limit: 0,
  },
];

function test<Task, Limit, Expected>(
  testCases: TestCase<Task, Limit, Expected>[]
): void {
  testCases.forEach((testCase, index) => {
    const result = parellelLimit(testCase.input, testCase.limit);
    const isSame = JSON.stringify(result) === JSON.stringify(testCase.expected);
    console.log(
      isSame ? `Testcase ${index + 1} passed` : `Testcase ${index + 1} failed`
    );
  });
}
const tasks: Promise<unknown>[] = [
  new Promise((resolve) => resolve("test1")),
  new Promise((resolve) => resolve("test2")),
  new Promise((resolve) => resolve("test3")),
  new Promise((resolve) => resolve("test4")),
  new Promise((resolve) => resolve("test5")),
];
function parellelLimit(tasks: Promise<unknown>[], limit: number): void {
  const toCall: Promise<unknown>[] = [];
  for (let i = 0; i < limit; i++) {
    toCall.push(tasks[i]); // use setTimeout for promises.
  }
  Promise.all(toCall).then((value) => console.log(value));

  for (let i = limit; i < tasks.length; i++) {
    tasks[i]();
  }
}
parellelLimit(tasks, 2);
