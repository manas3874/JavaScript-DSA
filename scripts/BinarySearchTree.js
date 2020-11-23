// ! A tree datastructure is widely used in computer science
// ! The binary tree is the most applied tree data structure as it helps writing, reading and deleting the nodes with log(n) time complexity
// ! A BST follows few simple rules
// * The root (on the top) will be a certain "KEY"
// * each node will have ONLY 2 children
// * the two children are named left and right
// * the left will always be lesser in mathematical comparison with the parent key (node) and the right will always be greater.

import { timer, timerForHundred, timerForThousand } from "./timer.js";
import { Queue } from "./stack,queue,deque.js";
// ! Implementation of a BST

function Node(data, left = null, right = null, parent = null) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.parent = parent;
}

export default class BinarySearchTree {
  constructor() {
    this.root = null;
    this.count = 0;
  }
  insert = (data) => {
    var newNode = new Node(data);
    if (this.root == null) {
      this.root = newNode;
      return this.root;
    } else {
      // ! RECURSIVE approach
      var currentNode = this.root;
      const insertionFunction = (currentNode) => {
        if (data < currentNode.data) {
          // ! is data less than the parent
          if (currentNode.left == null) {
            // ! place is empty, place the new node here
            currentNode.left = newNode;
            currentNode.left.parent = currentNode;
            // console.log(
            //   "after " +
            //     newNode.data +
            //     " tree is balanced : " +
            //     this.isBalanced() +
            //     " with factor " +
            //     this.__balanceFactor()
            // );
            return currentNode.left;
          } else if (currentNode.left != null) {
            // ! if space is not empty, run a recursive check
            return insertionFunction(currentNode.left);
          }
        } else if (data > currentNode.data) {
          // ! is data more than the parent
          if (currentNode.right == null) {
            // ! place is empty, place the new node here
            currentNode.right = newNode;
            currentNode.right.parent = currentNode;
            // console.log(
            //   "after " +
            //     newNode.data +
            //     " tree is balanced : " +
            //     this.isBalanced() +
            //     " with factor " +
            //     this.__balanceFactor()
            // );
            return currentNode.right;
          } else if (currentNode.right != null) {
            // ! if space is not empty, run a recursive check
            return insertionFunction(currentNode.right);
          }
        } else {
          // ! DATA not added to the tree because it already exists
          return false;
        }
      };
      ++this.count;
      return insertionFunction(currentNode); //! currentNode = this.root
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

  // ! ************************************************************************************************
  // * 1. PRE-order traversal         visit the node | check left | check right
  // * 2. IN-order traversal          check left | visit the node | check right -- Prints a sorted list of elements for BST
  // * 3. POST-order traversal        check left | check right | visit the node
  // ! ************************************************************************************************
  preOrder = (currentNode = this.root) => {
    var arrayOfData = [];
    const recursivePreOrder = (currentNode) => {
      arrayOfData.push(currentNode.data);
      currentNode.left && recursivePreOrder(currentNode.left);
      currentNode.right && recursivePreOrder(currentNode.right);
    };
    recursivePreOrder(currentNode);
    return arrayOfData;
  };
  inOrder = (currentNode = this.root, ascending = true) => {
    var arrayOfData = [];
    // ! by default we will sort in ascending order
    const recursiveInOrder = (currentNode, ascending) => {
      if (ascending) {
        if (currentNode != null) {
          currentNode.left && recursiveInOrder(currentNode.left, ascending);
          arrayOfData.push(currentNode.data);
          currentNode.right && recursiveInOrder(currentNode.right, ascending);
        }
      } else {
        // ! descending order
        if (currentNode != null) {
          currentNode.right && recursiveInOrder(currentNode.right, ascending);
          arrayOfData.push(currentNode.data);
          currentNode.left && recursiveInOrder(currentNode.left, ascending);
        }
      }
    };
    recursiveInOrder(currentNode, ascending);
    return arrayOfData;
  };
  postOrder = (currentNode = this.root) => {
    var arrayOfData = [];
    const recursivePostOrder = (currentNode) => {
      currentNode.left && recursivePostOrder(currentNode.left);
      currentNode.right && recursivePostOrder(currentNode.right);
      arrayOfData.push(currentNode.data);
    };
    recursivePostOrder(currentNode);
    return arrayOfData;
  };
  levelOrder = (currentNode = this.root) => {
    var Q = new Queue();
    var arrayOfData = [];
    Q.enQueue(currentNode);
    while (Q.length > 0) {
      let node = Q.deQueue();
      arrayOfData.push(node.data);
      node.left && Q.enQueue(node.left);
      node.right && Q.enQueue(node.right);
    }
    return arrayOfData;
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
    --this.count;
  };
  // ! this removeNode method will return null somewhere during the execution and that null will be set to the element which we want to remove. basically, the parent which points to the removed data will lose the reference to the removed data
  __removeNode = (currentNode, data) => {
    // ! root node doesn't exist
    if (currentNode == null) {
      console.warn("not found");
      ++this.count;
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
        currentNode.left.parent = currentNode.parent;
        return currentNode.left;
      }
      // ! the currentNode only has a subtree on the RIGHT
      if (currentNode.left == null && currentNode.right != null) {
        currentNode.right.parent = currentNode.parent;
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
  // ! This function will find the height of the tree at any node
  // ! basically, it waits to reach the leaf with no children so that it can return -1 (if we return 0 for leaf nodes, then additional +1 will make the counting wrong)
  // ! once left and right return their heights, the parent node checks the maximum height and adds its own height (+1) and passes it to its parent
  findHeight = (currentNode = this.root) => {
    const recursiveHeight = (currentNode) => {
      if (currentNode == null) {
        return -1; // ! all leaf nodes return -1
      }
      let leftHeight = recursiveHeight(currentNode.left); // ! check the height of left
      let rightHeight = recursiveHeight(currentNode.right); // ! check the height of right
      return Math.max(leftHeight, rightHeight) + 1; // ! all non-leaf nodes return the maximum height of their children + their own height, to their parents
    };
    return recursiveHeight(currentNode);
  };

  __balanceFactor = (currentNode = this.root) => {
    if (currentNode == null) {
      return 0;
    }
    return (
      this.findHeight(currentNode.left) - this.findHeight(currentNode.right)
    );
  };
  // ! To be a balanced tree (at any node), the height of the left and the right sub-tree must AT-MOST differ by 1
  isBalanced = (currentNode = this.root) => {
    // ! positive means left heavy, negative means right heavy
    if ([-1, 0, 1].includes(this.__balanceFactor(currentNode))) {
      return true;
    }
    return false;
  };
}

var bst = new BinarySearchTree();

// ! automatically adding data for testing
var autoInsertToTest = (numberOfNodes) => {
  var objectOfData = {};
  while (Object.keys(objectOfData).length < numberOfNodes) {
    let num = Math.floor(Math.random() * 100);
    if (!(num in objectOfData)) {
      objectOfData[num] = 1;
    }
  }
  Object.keys(objectOfData).forEach((item) => bst.insert(item));
  console.log(Object.keys(objectOfData));
};
// autoInsertToTest(40);

// bst.insert(25);
// bst.insert(45);
// bst.insert(8);
// bst.insert(12);
// bst.insert(20);
// bst.insert(9);
// bst.remove(12);
// console.log(bst.root);

// bst.insert(66);
// bst.insert(13);
// bst.insert(19);
// bst.insert(22);
// bst.insert(28);
// bst.insert(5);
// bst.insert(18);
// bst.insert(27);
// bst.insert(55);
// bst.insert(17);
// bst.insert(108);
// timer(() => console.log(bst.findMin(), bst.findMax()));
// bst.showDistribution();

// console.log(bst.has(8));

// bst.remove(10);
// bst.remove(26);
// console.log(bst.count);

// timer(() => console.log(bst.preOrder()));
// timer(() => console.log(bst.inOrder()));
// timer(() => console.log(bst.postOrder()));
// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.findHeight(bst.root));
// console.log(bst.__balanceFactor());
// console.log(bst.isBalanced());
// console.log(bst.levelOrder());
// timer(bst.isBalanced);
// timerForHundred(bst.isBalanced);
// timerForThousand(bst.isBalanced);
