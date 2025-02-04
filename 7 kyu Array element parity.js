const solve=a=>a.find(e=>!a.includes(-e));
const solve = array => array.find(value => !array.includes(-value))
const solve = arr => [...new Set(arr)].reduce((a, c) => a + c);
function solve(arr) {
    for (var i = 0; i < arr.length; i++)
      if (!arr.includes(-1 * arr[i])) return arr[i];
  }
  function solve(arr) {
    const s = new Set(arr);
    for (const x of s) {
      if (!s.has(-x)) return x;
    }
  }; 
  solve=a=>[...new Set(a)].reduce((s,n)=>s+n)
  const solve = arr =>
    arr.find(val => !arr.includes(-val));

console.log(solve([1, -9, -105, -9, -9, -9, -9, 105, -1]));
console.log([...new Set([1, -1, 2, -2, 3, 1, 4])]);
