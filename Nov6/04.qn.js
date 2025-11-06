function interpretsNumber(arr) {
    let result = Number(arr.toString().replaceAll(',', '')) + 1;
    return result.toString().split('');
}
console.log(interpretsNumber([1, 2, 3]));
console.log(interpretsNumber([9]));
console.log(interpretsNumber([1, 0, 2, 4]));