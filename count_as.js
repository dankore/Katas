function repeatedString(s, n) {
let o = new String(s)
let h = [...new Set(o)].toString('')
if(s == h){
    return n
}
console.log(s, h)
  let y = s.repeat(n).substring(0, 10);
//   console.log(y)
  return y.split("").filter(x => x == "a").length;
// console.log(y.split("").filter(x=> x=="a").length)
}


console.log(repeatedString("aaaaaa", 1000000000000));