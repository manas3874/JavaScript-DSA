// ! A tree datastructure is widely used in computer science
// ! The binary tree is the most applied tree data structure as it helps writing, reading and deleting the nodes with log(n) time complexity
// ! A BST follows few simple rules
// * The root (on the top) will be a certain "KEY"
// * each node will have ONLY 2 children
// * the two children are named left and right
// * the left will always be lesser in mathematical comparison with the parent key (node) and the right will always be greater.

// ! Implementation of a BST

function Node(data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert = (data) => {
    var newNode = new Node(data);
    if (this.root == null) {
      this.root = newNode;
      return true;
    } else {
      // ! RECURSIVE approach
      var currentNode = this.root;
      const insertionFunction = (currentNode) => {
        if (data < currentNode.data) {
          // ! is data less than the parent
          if (currentNode.left == null) {
            // ! place is empty, place the new node here
            currentNode.left = newNode;
            return true;
          } else if (currentNode.left != null) {
            // ! if space is not empty, run a recursive check
            return insertionFunction(currentNode.left);
          }
        } else if (data > currentNode.data) {
          // ! is data more than the parent
          if (currentNode.right == null) {
            // ! place is empty, place the new node here
            currentNode.right = newNode;
            return true;
          } else if (currentNode.right != null) {
            // ! if space is not empty, run a recursive check
            return insertionFunction(currentNode.right);
          }
        } else {
          return false;
        }
      };
      insertionFunction(currentNode); //! currentNode = this.root
    }

    // ! non recursive approach
    // else {
    //   var currentNode = this.root;
    //   var parentNode;
    //   while (true) {
    //     parentNode = currentNode;
    //     if (data < parentNode.data) {
    //       currentNode = parentNode.left;
    //       if (currentNode == null) {
    //         parentNode.left = newNode;
    //         break;
    //       }
    //     } else {
    //       currentNode = parentNode.right;
    //       if (currentNode == null) {
    //         parentNode.right = newNode;
    //         break;
    //       }
    //     }
    //   }
    // }
  };
}
