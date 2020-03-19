function braces(values) {
  const container = [];
  const obj = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  for (var i = 0; i < values.length; i++) {
    if (values[i] === "(" || values[i] === "{" || values[i] === "[") {
      container.push(values[i]);
    }
    else {
      let last = container.pop();
      if (values[i] !== obj[last]) {
        return "NO";
      }
    }
  }
  if (container.length !== 0) {
    return false;
  }

  return "YES";
}

console.log(braces("{}[]()"));
console.log(braces("{[}]}"));
