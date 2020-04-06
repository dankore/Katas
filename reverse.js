const reverse = arr => {
    for (let i = 0; i < arr.length/2; i++) {
        let temp = arr[i];

        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
        console.log(arr)
        
    }
    return arr;
}

console.log(reverse([1,2,3,4]));
console.log(reverse(["a", "b", "c"]));
console.log(reverse([]));
console.log(reverse([2]));

//1