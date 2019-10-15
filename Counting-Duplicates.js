//Count the number of Duplicates
//Kata: https://www.codewars.com/kata/counting-duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters 
//and numeric digits that occur more than once in the input string. The input string can be assumed 
//to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
  let count = {};

  const letters_to_lower_case = text.toLowerCase();

  for (let i = 0; i < letters_to_lower_case.length; i++) {
    if (typeof count[letters_to_lower_case.charAt(i)] == "undefined") {
      count[letters_to_lower_case.charAt(i)] = 1;
    } else {
      count[letters_to_lower_case.charAt(i)] = count[letters_to_lower_case.charAt(i)] + 1;
    }
  }
  return Object.values(count).filter(v => v > 1).length
  
}


console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2,"should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2)
