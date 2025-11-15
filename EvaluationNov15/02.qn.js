"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupAnagram = groupAnagram;
function groupAnagram(words) {
    var map = new Map();
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var key = word.split("").sort().join("");
        if (!map.has(key))
            map.set(key, []);
        map.get(key).push(word);
    }
    return __spreadArray([], map.values(), true);
}
