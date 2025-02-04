function findElement(arr, value) {
  return arr.findIndex((el) => el === value);
}
console.log(findElement([null, undefined, null], null));
console.log([1, 2, 3, 4, 5].findIndex((el) => el == 4));

function findAllOccurrences(arr, item) {
  let newArr = arr.filter((el) => el === item).length;
  console.log(newArr);
  return newArr;
}
console.log(findAllOccurrences([0, 0, 1, 1, 1, 2], 1));

function removeFalsyValues(arr) {
  return arr.filter((el) => el);
}
console.log(removeFalsyValues([false, 0, NaN, '', undefined]));

function getStringsLength(arr) {
  return arr.map((el) => el.length);
}
console.log(getStringsLength(['', 'a', 'bc', 'def', 'ghij']));

// function swapHeadAndTail(arr) {
//   let mid =
// }

function calculateBalance(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = null;
  for (let i = 0; i < arr.length; i += 1) {
    if (i === 0) {
      sum = arr[i][0] - arr[i][1];
      console.log(sum);
    }
    if (i === 1) {
      sum = arr[i][0] - arr[i][1];
      console.log(sum);
    }
  }
  return (sum += sum);
}

console.log(
  calculateBalance([
    [10, 8],
    [5, 1],
  ])
);

const getIntervalArray = (start, end) => {
  if (start > end) {
    return [];
  }
  return [start].concat(getIntervalArray(start + 1, end));
};
console.log(getIntervalArray(2, 4));

function getAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / arr.length;
  return average.toFixed(2);
}
console.log(getAverage[(1, 2, 3)]);

console.log((8/3).toFixed(2));
