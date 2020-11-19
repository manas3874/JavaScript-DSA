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
  // ! From the basics of a BST, we know that lesser values are placed on the left and greater values are placed on the right
  findMin = () => {
    // ! traverse all the way down on the left until you reach a node with null on the left
    var currentNode = this.root;
    while (currentNode.left != null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  };
  findMax = () => {
    // ! traverse all the way down on the right until you reach a node with null on the right
    var currentNode = this.root;
    while (currentNode.right != null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  };

  //   showDistribution = () => {
  //     function dist(left, right, info = null) {
  //       [(this.left = left), (this.right = right), (this.info = info)];
  //     }
  //     var distribution = {
  //       root: this.root.data,
  //     };
  //     var currentNode = this.root;
  //     // console.log(distribution);
  //     const distributor = (parent, current) => {
  //       console.log(current.left.data);
  //       parent["info"] = new dist(current.left, current.right);

  //       if (current.right != null) {
  //         distributor(parent["info"], current.right);
  //       }
  //       if (current.left != null) {
  //         distributor(parent["info"], current.left);
  //       }
  //       return;
  //     };
  //     distributor(distribution, currentNode);

  //     console.log(distribution);
  //   };
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
timer(() => console.log(bst.findMin(), bst.findMax()));
// bst.showDistribution();
