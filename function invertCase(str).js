function reverseWords(str) {
  return str
    .split(' ')
    .map((e) => e.split('').reverse().join(''))
    .join(' ');
}

console.log(reverseWords('Hello World'));
console.log(reverseWords('The Quick Brown Fox'));
console.log('bklbef nwqildbqw ;ondqo;nd'.split(' ').join(' '));

let s = 'Geeks for Rabbit';
const ans = [...s].reverse().join('');
console.log([...s]);

console.log(ans);
