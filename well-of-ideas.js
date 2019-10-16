//Kata: https://www.codewars.com/kata/well-of-ideas-easy-version
function well(x) {
  let object_with_count = x.reduce((count, word) => {
    if (count.hasOwnProperty(word)) {
      count[word] += 1;
    } else {
      count[word] = 1;
    }
    return count;
  }, {});


  if (!object_with_count.good) {
    return "Fail!";
  } else if (object_with_count.good >= 1 && object_with_count.good <= 2) {
    return "Publish!";
  } else {
    return "I smell a series!";
  }
}

console.log(well(["bad", "bad", "bad"]), "Fail!");
console.log(well(["good", "bad", "bad", "bad", "bad"]), "Publish!");
console.log(
  well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"]),
  "I smell a series!"
);
