import BinarySearchTree from "./BinarySearchTree.js";

export class AVL extends BinarySearchTree {
  constructor() {
    super();
  }
  insertNode = (data) => {
    var insertedNode = this.insert(data);
    console.log(insertedNode);
    // ! after each insertion, the root's balance is checked, the rotations are always carried out upon the root
    // ! checking the balance of root and performing action
    this.__rotationRequirement(this.root, insertedNode);
  };

  __rotationRequirement = (currentNode, insertedNode) => {
    if (this.__balanceFactor(currentNode) == -2) {
      console.log(currentNode.data + " is right heavy");
      // ! new data is more than right data of unbalanced node
      if (insertedNode.data > currentNode.right.data) {
        console.log("RR rotation required");
        this.root = this.__RRRotation(currentNode);
        return;
      }

      // ! new data is less than right data of unbalanced node
      if (insertedNode.data < currentNode.right.data) {
        console.log("RL rotation required");
        this.root = this.__RLRotation(currentNode);
        return;
      }
    } else if (this.__balanceFactor(currentNode) == 2) {
      console.log(currentNode.data + " is left heavy");
      // ! new data is less than left data of unbalanced node
      if (insertedNode.data < currentNode.left.data) {
        console.log("LL rotation required");
        this.root = this.__LLRotation(currentNode);
        return;
      }
      // ! new data is more than left data of unbalanced node
      if (insertedNode.data > currentNode.left.data) {
        console.log("LR roatation required");
        this.root = this.__LRRotation(currentNode);
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
}

var avlTree = new AVL();
// avlTree.insertNode(5);
// avlTree.insertNode(8);
// avlTree.insertNode(4);
// avlTree.insertNode(3);
// avlTree.insertNode(2);
// avlTree.insertNode(1);
// avlTree.insertNode(10);
// avlTree.insertNode(14);
// avlTree.insertNode(13);
// avlTree.insertNode(6);
// avlTree.insertNode(7);

avlTree.insertNode(10);
avlTree.insertNode(11);
avlTree.insertNode(5);
// avlTree.insertNode(4);
avlTree.insertNode(8);
avlTree.insertNode(7);
avlTree.insertNode(9);
console.log(avlTree.inOrder());
// console.log(avlTree.root);
