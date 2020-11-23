import BinarySearchTree from "./BinarySearchTree.js";

export class AVL extends BinarySearchTree {
  constructor() {
    super();
  }
  insertNode = (data) => {
    var insertedNodeParent = this.insert(data).parent;
    // console.log(this.insert(data));
    // console.log(insertedNodeParent);
    console.log(this.__balanceFactor(insertedNodeParent));
  };
}

var avlTree = new AVL();
avlTree.insertNode(5);
avlTree.insertNode(8);
avlTree.insertNode(2);
avlTree.insertNode(6);
avlTree.insertNode(10);

// console.log(avlTree.root);
