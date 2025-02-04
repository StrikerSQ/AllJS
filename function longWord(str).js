function longWord(str) {
  const words = str.split(' ');
  let longWords = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const word of words) {
    if (word.length > longWords.length) longWords = word;
  }
  return longWords;
}
console.log(longWord('I whant to break free'));
