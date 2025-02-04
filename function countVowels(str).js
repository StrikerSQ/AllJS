function isPalindrome(str) {
  return (
    str.toLocaleLowerCase().replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '') ===
    str
      .toLocaleLowerCase()
      .replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '')
      .split('')
      .reverse()
      .join('')
  );
}
console.log(isPalindrome('No lemon, no melon'));
