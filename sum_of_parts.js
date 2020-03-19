function partsSums(ls) {
  if (ls.length === 0) {
    return [0];
  }
  let y = [];
  while (ls.length > 0) {
    y.push(ls.reduce((a, c) => a + c, 0));
    ls.shift();
  }

  return [...y, 0];
}

console.log(partsSums([])) // [0]
console.log(partsSums([0, 1, 3, 6, 10])) // [20, 20, 19, 16, 10, 0]
console.log(
  partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358])
); //  [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]