var testCases = [
    {
        expected: [
            [2, 4],
            [1, 3],
        ],
        input: [1, 2, 3, 4],
        fn: function (x) { return x % 2 === 0; },
    },
    {
        expected: [
            [7, 9],
            [2, 4, 5, 6],
        ],
        input: [2, 4, 5, 6, 7, 9],
        fn: function (x) { return x > 6; },
    },
    {
        expected: [[1], [3, 5, 7]],
        input: [1, 3, 5, 7],
        fn: function (x) { return x < 2; },
    },
    {
        expected: [
            [1, 1],
            [3, 4, 7],
        ],
        input: [1, 3, 4, 7, 1],
        fn: function (x) { return x < 2; },
    },
    {
        expected: [
            [1, 3, 5, 7],
            [2, 4],
        ],
        input: [1, 2, 3, 4, 5, 7],
        fn: function (x) { return x % 2 !== 0; },
    },
    {
        expected: [[], [2, 4, 6, 8, 10]],
        input: [2, 4, 6, 8, 10],
        fn: function (x) { return x % 2 !== 0; },
    },
    {
        expected: "input is not an array",
        input: "[1, 3, 5, 7, 9]",
        fn: function (x) { return x > 4; },
    },
    {
        expected: "input is not an array",
        input: "1, 2, 3, 5, 6",
        fn: function (x) { return x > 4; },
    },
    {
        expected: "input is not an array",
        input: "[1, 3, 5, 7, 9]",
        fn: function (x) { return x > 4; },
    },
    {
        expected: "input is not an array",
        input: { n: 1, m: 2 },
        fn: function (x) { return x > 4; },
    },
    {
        expected: [[], []],
        input: [],
        fn: function (x) { return x > 4; },
    },
    { expected: "input is not an array", input: true, fn: function (x) { return x > 4; } },
    { expected: "input is not an array", input: false, fn: function (x) { return x > 4; } },
    { expected: "input is not an array", input: undefined, fn: function (x) { return x > 4; } },
    { expected: "input is not an array", input: null, fn: function (x) { return x > 4; } },
];
test(testCases);
function test(testCases) {
    testCases.forEach(function (testCase, index) {
        var result = partition(testCase.input, testCase.fn);
        var flag = true;
        if (typeof result === "boolean") {
            if (result === testCase.expected) {
                console.log("Testcase ".concat(index + 1, " passed"));
            }
            else
                console.log("Testcase ".concat(index + 1, " failed"));
        }
        else {
            if (Array.isArray(result) && Array.isArray(testCase.expected)) {
                for (var i = 0; i < testCase.expected.length; i++) {
                    for (var j = 0; j < testCase.expected[i].length; j++) {
                        if (testCase.expected[i][j] !== result[i][j])
                            flag = false;
                    }
                }
            }
            else {
                if (result !== testCase.expected)
                    flag = false;
            }
            if (flag === true)
                console.log("Testcase ".concat(index + 1, " passed"));
            else
                console.log("Testcase ".concat(index + 1, " failed"));
        }
    });
}
function Partition(arr, fn) {
    var pass1 = [];
    var pass2 = [];
    arr.map(function (item) {
        if (fn(item))
            pass1.push(item);
        else
            pass2.push(item);
    });
    return [pass1, pass2];
}
