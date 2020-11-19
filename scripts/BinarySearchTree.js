// ! A tree datastructure is widely used in computer science
// ! The binary tree is the most applied tree data structure as it helps writing, reading and deleting the nodes with log(n) time complexity
// ! A BST follows few simple rules
// * The root (on the top) will be a certain "KEY"
// * each node will have ONLY 2 children
// * the two children are named left and right
// * the left will always be lesser in mathematical comparison with the parent key (node) and the right will always be greater.

import { timer } from "./timer.js";
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
          // ! DATA not added to the tree because it already exists
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
  has = (data) => {
    var currentNode = this.root;
    if (currentNode.data == data) {
      return currentNode;
    }
    const searchData = (data, currentNode) => {
      if (data < currentNode.data) {
        if (currentNode.left == null) {
          return null;
        }
        if (currentNode.left.data == data) {
          // console.log(currentNode.left);
          return currentNode.left;
        } else {
          currentNode = currentNode.left;
          searchData(currentNode);
        }
      } else if (data > currentNode.data) {
        if (currentNode.right == null) {
          return null;
        }
        if (currentNode.right.data == data) {
          return currentNode.right;
        } else {
          currentNode = currentNode.right;
          searchData(currentNode);
        }
      }
    };
    return searchData(data, currentNode);
  };

  // ! sorting a BST // RECURSIVE
  inOrder = (currentSortingNode, ascending = true) => {
    // ! by default we will sort in ascending order
    if (ascending) {
      if (currentSortingNode != null) {
        this.inOrder(currentSortingNode.left);
        console.log(currentSortingNode.data);
        this.inOrder(currentSortingNode.right);
      }
    } else {
      // ! descending order
      if (currentSortingNode != null) {
        this.inOrder(currentSortingNode.right, false);
        console.log(currentSortingNode.data);
        this.inOrder(currentSortingNode.left, false);
      }
    }
  };

  // ! From the basics of a BST, we know that lesser values are placed on the left and greater values are placed on the right
  findMin = (currentNode = this.root) => {
    // ! traverse all the way down on the left until you reach a node with null on the left

    while (currentNode.left != null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  };
  findMax = (currentNode = this.root) => {
    // ! traverse all the way down on the right until you reach a node with null on the right

    while (currentNode.right != null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  };
  remove = (data) => {
    this.root = this.__removeNode(this.root, data);
  };
  // ! this removeNode method will return null somewhere during the execution and that null will be set to the element which we want to remove. basically, the parent which points to the removed data will lose the reference to the removed data
  __removeNode = (currentNode, data) => {
    // ! root node doesn't exist
    if (currentNode == null) {
      console.log("not found");
      return null;
    }
    // ! if the node with specified data is found, check few cases
    if (currentNode.data == data) {
      // ! the currentNode has no children and we can safely delete the node
      if (currentNode.left == null && currentNode.right == null) {
        return null;
      }
      // ! the currentNode only has a subtree on the LEFT
      if (currentNode.left != null && currentNode.right == null) {
        return currentNode.left;
      }
      // ! the currentNode only has a subtree on the RIGHT
      if (currentNode.left == null && currentNode.right != null) {
        return currentNode.right;
      }
      // ! if the currentNode has a subtree on both the sides // MOST COMPLEX
      var tempNodeData = this.findMin(currentNode.right); // ! find the minimum node on the right / or maximum node on the left
      // console.log(tempNodeData);
      currentNode.data = tempNodeData; // ! the node which was to be removed is removed, and is replaced with an appropriate node to maintain the BST principles
      // ! now the currentNode.data and minimum of right are duplicated, so now we have to remove the minimum of the right
      currentNode.right = this.__removeNode(currentNode.right, tempNodeData);
      return currentNode;
    } else if (data < currentNode.data) {
      // ! current level is eliminated, check next level
      currentNode.left = this.__removeNode(currentNode.left, data);
      return currentNode;
    } else if (data > currentNode.data) {
      // ! current level is eliminated, check next level
      currentNode.right = this.__removeNode(currentNode.right, data);
      return currentNode;
    }
  };
}

var bst = new BinarySearchTree();
bst.insert(25);
bst.insert(45);
bst.insert(8);
bst.insert(12);
bst.insert(20);
bst.insert(9);
bst.insert(66);
bst.insert(13);
bst.insert(19);
bst.insert(22);
bst.insert(28);
bst.insert(5);
bst.insert(18);
bst.insert(27);
bst.insert(55);
bst.insert(17);
// timer(() => console.log(bst.findMin(), bst.findMax()));
// bst.showDistribution();

// console.log(bst.has(8));

bst.remove(10);
bst.remove(12);
timer(() => bst.inOrder(bst.root));
