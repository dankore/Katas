function findShort(s) {
    // Kata: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
  return s.split(" ").map(word => word.length).sort((a, b)=> a - b)[0];
}

console.log(
  findShort(
    "Monero MadeSafeCoin Factom ProofOfWork Dash Factom Classic MadeSafeCoin Steem DarkCoin Bitcoin 21inc ProofOfWork Steem"
  ),
  3
);
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  ),
  3
);
