const data  = require('./data')
let y = data.map(x => x.type);
console.log(y)


const distributeEvenly = array => {
  var m = array.length,
    t,
    i;

  const uniqueTypes = [...new Set(array)];

  const arrayOfTypes = uniqueTypes.map(outer =>
    array.filter(inner => outer === inner)
  );

  array
    .map((item, idx) => arrayOfTypes.map(el => el[idx]))
    .reduce((a, b) => a.concat(b))
    .filter(_ => _);

//   // While there remain elements to shuffle…
//   while (m) {
//     // Pick a remaining element…
//     i = Math.floor(Math.random() * m--);

//     // And swap it with the current element.
//     t = array[m];
//     array[m] = array[i];
//     array[i] = t;
//   }
  return array
};

console.log(distributeEvenly(y))


