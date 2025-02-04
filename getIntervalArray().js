const getIntervalArray = (start, end) => {
  if (start > end) {
    return [];
  }
  return [start].concat(getIntervalArray(start + 1, end));
};
console.log(getIntervalArray(2, 4));
