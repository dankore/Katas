// Kata: https://www.codewars.com/kata/56853c44b295170b73000007
var isSquare = function(arr){
    //Your code here
    if(!arr.length) return undefined
    
    let boolArray = arr.map(num=>{
        return Math.sqrt(num) % 1 === 0
    })
    // boolArray returns an array. If array length is not 1 then false
    return [...new Set(boolArray)].length == 1 
  }

console.log(isSquare([1, 4, 9, 16, 25, 36]));
console.log(isSquare([1, 2, 3, 4, 5, 6]));
console.log(isSquare([]));
console.log(isSquare([1, 2]));
console.log(isSquare([1, 2, 4, 15])); 