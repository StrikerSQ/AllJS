const arr = [
  { name: 'Warrior reading this kata', wasNice: true },
  { name: 'xDranik', wasNice: false },
  { name: 'Santa', wasNice: true },
];

function getNiceNames(people) {
  let n = [];
  for (let i = 0; i < people.length; i += 1) {
    console.log(people[i]);
    if (people[i].wasNice == true) {
      console.log(people[i].name);
      n.push(people[i].name);
      console.log(n);
    }
  }
  return n;
}

function getNaughtyNames(people) {
  let n = [];
  for (let i = 0; i < people.length; i += 1) {
    console.log(people[i]);
    if (people[i].wasNice == false) {
      console.log(people[i].name);
      n.push(people[i].name);
      console.log(n);
      return n;
    }
  }
}

console.log(
  getNaughtyNames([
    { name: 'Warrior reading this kata', wasNice: true },
    { name: 'xDranik', wasNice: false },
    { name: 'Santa', wasNice: true },
  ])
);
console.log(
  getNiceNames([
    { name: 'Warrior reading this kata', wasNice: true },
    { name: 'xDranik', wasNice: false },
    { name: 'Santa', wasNice: true },
  ])
);



const getNiceNames = (people) =>
  people.reduce((pre, val) => (val.wasNice ? [...pre, val.name] : pre), []);

const getNaughtyNames = (people) =>
  people.reduce((pre, val) => (val.wasNice ? pre : [...pre, val.name]), []);





const getNiceNames = ( $ ) => $.filter(el => el.wasNice).map(el => el.name);

const getNaughtyNames = ( $ ) => $.filter(el => !el.wasNice).map(el => el.name);




function getNiceNames(people){
	return people.filter(function(person) {return person.wasNice === true;}).map(function(e) {return e.name});
}

function getNaughtyNames(people){
	return people.filter(function(person) {return person.wasNice === false;}).map(function(e) {return e.name});
}