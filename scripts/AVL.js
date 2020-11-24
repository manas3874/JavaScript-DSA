import BinarySearchTree from "./BinarySearchTree.js";

export class AVL extends BinarySearchTree {
  constructor() {
    super();
  }
  insertNode = (data) => {
    var insertedNode = this.insert(data);
    // console.log(this.insert(data));
    console.log(insertedNode);
    var currentNode = insertedNode;
    while (currentNode != this.root) {
      if (this.__balanceFactor(currentNode) == -2) {
        console.log(currentNode.data + " is right heavy");
        currentNode.right.right ? console.log("RR") : null;
        currentNode.right.left ? console.log("RL") : null;
      } else if (this.__balanceFactor(currentNode) == 2) {
        console.log(currentNode.data + " is left heavy");
        currentNode.left.left ? console.log("LL") : null;
        currentNode.left.right ? console.log("LR") : null;
      }
      currentNode = currentNode.parent;
    }
    if (this.__balanceFactor() == -2) {
      console.log("root is right heavy");
    } else if (this.__balanceFactor() == 2) {
      console.log("root is left heavy");
    }
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

// console.log(avlTree.root);
