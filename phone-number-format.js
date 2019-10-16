// Kata: https://www.codewars.com/kata/create-phone-number
function createPhoneNumber(numbers) {
    // let 
    //  a = numbers[0], b = numbers[1], 
    //  c = numbers[2], d = numbers[3],
    //  e = numbers[4], f = numbers[5], 
    //  g = numbers[6], h = numbers[7], 
    //  i = numbers[8], j = numbers[9];

    // return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;

    // Alternative solution
    let a = numbers.slice(0, 3).join("")
    let b = numbers.slice(3, 6).join("");
    let c = numbers.slice(6, 10).join("");

    return `(${a}) ${b}-${c}`
}




console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");