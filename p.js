let count = {};

function text(a) {
    console.log(a)
  let b = a.replace(/, /g, '')

  for (var i = 0; i < b.length; i++) {
    if (typeof count[a.charAt(i)] == "undefined") {
      count[b.charAt(i)] = 1;
    } else {
      count[b.charAt(i)] += 1;
    }
  }
  return count;
}



console.log(text("adamu, jdjdjd"));
