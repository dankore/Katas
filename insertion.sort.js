// HELPER
function findSmallestElementIndex(arr) {
  let smallestElement = arr[0];
  let smallest_index = 0;

  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];

    if (element < smallestElement) {
      smallestElement = element;
      smallest_index = i;
    }
  }
  
  return smallest_index;
}

// MAIN
function insertionSort(arr) {
  let newArr = [];

  while (arr.length) {
    let smallestElemIndex = findSmallestElementIndex(arr);
    newArr.push(arr.splice(smallestElemIndex, 1)[0]);
  }

  return newArr;
}

console.log(insertionSort([3, 0, 4, 5, 2, 9, 1]));
