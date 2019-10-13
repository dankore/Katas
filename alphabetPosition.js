function alphabetPosition(text) {
    // Kata: https://www.codewars.com/kata/546f922b54af40e1e90001da

    let alphabetsAndPosition = 
    {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, 
        n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }
     
    // Remove spaces and other non numerical or alphabeticall digits
    let spacesApostrophePeriodRemoved = text.replace(/[^0-9a-zA-Z]/gi, '').toLowerCase();
    
    // Get alphabets without position
    let regex = /[a-z]/gi;
    
    // Match it with given test inputs: does matched_array matches any digits in regex?
    let matched_array = spacesApostrophePeriodRemoved.match(regex)
    
    // Identify corresponding numbers and return
    return matched_array ? matched_array.map(letter => alphabetsAndPosition[letter]).join(" ") : ""
}
console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition("}6{>>{01")); //""
