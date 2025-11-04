function sortArray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  return numbers;
}
console.log(sortArray([4, 5, 8, 3, 1, 2]));
console.log(sortArray([23, 4, 54, 7, 1002, 34, 511, 53]));
