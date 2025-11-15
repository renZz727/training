"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _02_qn_js_1 = require("./02.qn.js");
var testCases = [
    {
        expected: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]],
        input: ["eat", "tea", "tan", "ate", "nat", "bat"],
    },
    {
        expected: [["rat"], ["tea", "ate"], ["tan", "nat"], ["bat"]],
        input: ["rat", "tea", "tan", "ate", "nat", "bat"],
    },
    {
        expected: [["melon", "lemon"], ["orange"]],
        input: ["melon", "lemon", "orange"],
    },
    {
        expected: [
            ["melon", "lemon"],
            ["orange", "rangeo"],
        ],
        input: ["melon", "lemon", "orange", "rangeo"],
    },
    {
        expected: [["melon"], ["orange"], ["pumpkin"]],
        input: ["melon", "orange", "pumpkin"],
    },
    {
        expected: [["sea"], ["saw", "was"], ["that"]],
        input: ["sea", "saw", "was", "that"],
    },
    {
        expected: [["in"], ["on", "no"], ["that"], ["were"], ["was"]],
        input: ["in", "on", "that", "were", "was", "no"],
    },
    {
        expected: [["no"]],
        input: ["no"],
    },
    {
        expected: [["in"], ["on"], ["that"]],
        input: ["in", "on", "that"],
    },
    {
        expected: [],
        input: [],
    },
];
test(testCases);
function test(testCases) {
    testCases.forEach(function (testCase, index) {
        var result = (0, _02_qn_js_1.groupAnagram)(testCase.input);
        console.log(testCase.expected, " ", result);
        var isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
        if (isSame)
            console.log("TestCase ".concat(index + 1, " passed"));
        else
            console.log("TestCase ".concat(index + 1, " failed"));
    });
}
