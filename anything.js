// // COMPARE TREES
// function TreeNode(val){
//     this.val = val;
//     this.left = null;
//     this.right = null;
// };

// function compareTrees(){
//     let rootTree1 = new TreeNode(5);
//     rootTree1.left = new TreeNode(3);
//     rootTree1.left.left = new TreeNode(1);
//     rootTree1.right = new TreeNode(7);
//     rootTree1.right.left = new TreeNode(6);

//     let rootTree2 = new TreeNode(3);
//     rootTree2.left = new TreeNode(1);
//     rootTree2.right = new TreeNode(6);
//     rootTree2.right.left = new TreeNode(5);
//     rootTree2.right.right = new TreeNode(7);

//     let array1 = new Array(), array2 = new Array();
//     inOrder(rootTree1, array1);
//     // inOrder(rootTree2, array2);

//     let ans = inOrderCheck(rootTree2, array1) && !array1.length;
//     return ans;
//     // return compareArrays(array1, array2);
// }

//     function compareArrays(a, b){
//         for (let i = 0; i < a.length; i++) {
//             if(a[i] !== b[i]) return false;
//         }
//         return true;
//     };
//     function inOrder(root, arr) {
//         if (root == null) return;
//         inOrder(root.left, arr);
//         arr.push(root.val);
//         inOrder(root.right, arr)
//     };

//     function inOrderCheck(root, arr){
//         if (root == null) return true;

//         if(!inOrderCheck(root.left, arr)){
//             return false;
//         }
//         if(!arr.length || arr[0] != root.val) return false;

//         arr.shift(arr[0]);

//         return inOrderCheck(root.right, arr);
//     }

// console.log(compareTrees())
// Given this tree, write code that will print the given output.

//          A
//        /   \
//       B     C
//      /     /  \
//     D     E    F

//
//tree
//check if root !null
//tree.left

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
//          A
//        /   \
//       B     C
//      /     /  \
//     D     E    F
function traverseTree() {
  let rootMain = new Node("A");
  rootMain.left = new Node("B");
  rootMain.left.left = new Node("C");

  rootMain.right = new Node("D");
  rootMain.right.left = new Node("E");
  rootMain.right.right = new Node("F");

  if (!rootMain) return [];
  let paths = [];
  let str = "";
  let results = "";
  //          A
  //        /   \
  //       B     C
  //      /     /  \
  //     D     E    F

  recurse(rootMain, str);
  return results;

  // RECURSIVE FUNCTION
  function recurse(root, path) {
    path += root.val;
    if (!root.left && !root.right) {
      // LEAF NODE
      console.log(path);
      results += path;
      return;
    }
    if (root.left) recurse(root.left, path);
    if (root.right) recurse(root.right, path);
  }
}

console.log(traverseTree());

// TIME : O(N);
// SPACE : O(N);
// Sample output:

// ABD
// ACE
// ACF
