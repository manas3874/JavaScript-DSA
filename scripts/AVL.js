import BinarySearchTree, { autoInsertToTest } from "./BinarySearchTree.js";
import {
  timer,
  timerForHundred,
  timerForThousand,
  testArrayOfHundred,
} from "./timer.js";
export class AVL extends BinarySearchTree {
  constructor() {
    super();
  }
  insertNode = (data) => {
    var insertedNode = this.insert(data);
    var currentNode = insertedNode;
    while (currentNode != this.root) {
      this.__rotationRequirement(currentNode, insertedNode);
      currentNode = currentNode.parent;
    }

    // ! after each insertion, the root's balance is checked, the rotations are always carried out upon the root
    // ! checking the balance of root and performing action

    // this.attach(temp.data, temp);
    return this.__rotationRequirement(this.root, insertedNode);
  };

  __rotationRequirement = (currentNode, insertedNode) => {
    if (this.__balanceFactor(currentNode) < -1) {
      // console.log(currentNode.data + " is right heavy");
      // ! new data is more than right data of unbalanced node
      if (insertedNode.data > currentNode.right.data) {
        if (currentNode === this.root) {
          this.root = this.__RRRotation(currentNode);
        } else {
          var tempParent = currentNode.parent;
          currentNode.parent.right = this.__RRRotation(currentNode);
          currentNode.parent.parent = tempParent;
        }

        return;
      }

      // ! new data is less than right data of unbalanced node
      if (insertedNode.data < currentNode.right.data) {
        if (currentNode === this.root) {
          this.root = this.__RLRotation(currentNode);
        } else {
          var tempParent = currentNode.parent;
          currentNode.parent.right = this.__RLRotation(currentNode);
          currentNode.parent.parent = tempParent;
        }

        return;
      }
    } else if (this.__balanceFactor(currentNode) > 1) {
      // console.log(currentNode.data + " is left heavy");
      // ! new data is less than left data of unbalanced node
      if (insertedNode.data < currentNode.left.data) {
        // console.log("LL rotation required");
        if (currentNode == this.root) {
          this.root = this.__LLRotation(currentNode);
        } else {
          var tempParent = currentNode.parent;
          currentNode.parent.left = this.__LLRotation(currentNode);
          currentNode.parent.parent = tempParent;
        }

        return;
      }
      // ! new data is more than left data of unbalanced node
      if (insertedNode.data > currentNode.left.data) {
        // console.log("LR rotation required");
        if (currentNode === this.root) {
          this.root = this.__LRRotation(currentNode);
        } else {
          var tempParent = currentNode.parent;
          currentNode.parent.left = this.__LRRotation(currentNode);
          currentNode.parent.parent = tempParent;
        }

        return;
      }
    } else {
      return;
    }
  };

  __LLRotation = (rootNode) => {
    const tempNode = rootNode.left;
    rootNode.left = tempNode.right;
    tempNode.right = rootNode;

    // ! fixing the parent pointers
    rootNode.parent = tempNode;
    tempNode.parent = null;

    return tempNode;
  };

  __LRRotation = (rootNode) => {
    const tempNode = rootNode.left.right;
    rootNode.left = tempNode.right;
    tempNode.parent.right = tempNode.left;
    tempNode.right = rootNode;
    tempNode.left = tempNode.parent;

    // ! fixing the parent pointers, since tempNode now holds the exact balanced root we need
    return this.__fixingDoubleRotationParents(tempNode);
  };
  __RRRotation = (rootNode) => {
    const tempNode = rootNode.right;
    rootNode.right = tempNode.left;
    tempNode.left = rootNode;

    // ! fixing the parent pointers
    rootNode.parent = tempNode;
    tempNode.parent = null;
    return tempNode;
  };

  __RLRotation = (rootNode) => {
    const tempNode = rootNode.right.left;
    rootNode.right = tempNode.left;
    tempNode.parent.left = tempNode.right;
    tempNode.left = rootNode;
    tempNode.right = tempNode.parent;

    // ! fixing the parent pointers
    return this.__fixingDoubleRotationParents(tempNode);
  };

  __fixingDoubleRotationParents = (tempNode) => {
    tempNode.left.right && (tempNode.left.right.parent = tempNode.left);
    tempNode.right.left && (tempNode.right.left.parent = tempNode.right);
    tempNode.left.parent = tempNode;
    tempNode.right.parent = tempNode;
    tempNode.parent = null;
    return tempNode;
  };

  removeNode = (data) => {
    var removedNode = this.has(data, this.root);
    var currentNode = removedNode.parent;
    this.remove(data);
    while (currentNode != this.root) {
      this.__rotationRequirement(currentNode, removedNode);
      currentNode = currentNode.parent;
    }
    return this.__rotationRequirement(this.root, removedNode);
  };
}

var avlTree = new AVL();
avlTree.insertNode(5);
avlTree.insertNode(8);
avlTree.insertNode(4);
avlTree.insertNode(3);
avlTree.insertNode(2);
avlTree.insertNode(1);
avlTree.insertNode(10);
avlTree.insertNode(14);
avlTree.insertNode(13);
avlTree.insertNode(6);
avlTree.insertNode(7);

// console.log(avlTree.has(1, avlTree.root));

avlTree.removeNode(13);
avlTree.removeNode(1);
// avlTree.removeNode(7);
// avlTree.removeNode(1);
// avlTree.removeNode(2);
// avlTree.removeNode(3);
// avlTree.removeNode(4);

// testArrayOfHundred.forEach((item) => avlTree.insertNode(item));
// timer(() => autoInsertToTest(100, avlTree.insertNode));
// timerForHundred(() => autoInsertToTest(100, avlTree.insertNode));
// timerForThousand(() => autoInsertToTest(100, avlTree.insertNode));
// console.log(avlTree.isBalanced());
// console.log(avlTree.__balanceFactor());
// console.log(avlTree.root);
// console.log(avlTree.findHeight(avlTree.root));
// console.log(avlTree.inOrder());
// console.log(avlTree.root);
