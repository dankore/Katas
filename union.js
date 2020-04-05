/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = new Map();
let res = [];
  for (let i = 0; i < nums1.length; i++) {
      
      if(!map.has(nums1[i])){
        map.set(nums1[i], 1);
      } else {
        map.set(nums1[i], map.get(nums1[i]) + 1);
      }
  }
  for(let num2 of nums2){
      if(map.has(num2) && map.get(num2) > 0){
        res.push(num2);
        map.set(num2, map.get(num2) - 1);
      }
  }

  return res;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
