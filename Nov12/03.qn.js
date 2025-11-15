"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByScoreRank = sortByScoreRank;
function sortByScoreRank(data) {
    var result = [];
    var map = new Map();
    var obj = {};
    var rank = 0;
    data.sort(function (a, b) { return b - a; });
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var score = data_1[_i];
        obj = {};
        if (!map.has(score)) {
            rank++;
            obj["score"] = score;
            obj["rank"] = rank;
            map.set(score, rank);
        }
        else {
            obj["score"] = score;
            obj["rank"] = rank;
        }
        result.push(obj);
    }
    return result;
}
