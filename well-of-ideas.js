//Kata: https://www.codewars.com/kata/well-of-ideas-easy-version
function well(x) {
  // Refactor
  const filtered = x.filter(word => word == "good").length
  return filtered < 1 ? "Fail!" :
         filtered < 3 ? "Publish!" : "I smell a series" 
}

console.log(well(["bad", "bad", "bad"]), "Fail!");
console.log(well(["good", "bad", "bad", "bad", "bad"]), "Publish!");
console.log(
  well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"]),
  "I smell a series!"
);
