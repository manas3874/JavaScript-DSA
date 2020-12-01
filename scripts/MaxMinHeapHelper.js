// ! Heaps are datastructures which help us get the max/min of a dataset in O(1) time.
// ! Max heap - all the parents will have a value greater than its children.
// ! All heaps are COMPLETE trees, filled top to bottom - left to right
// ! no node is left empty/ undefined
// ! A level order traversal will print out the exact array of this heap
// ! Heap sort algorithm is used to sort any set of numbers.
// ! Heaps are often used as a priority queue as it performs the functions in O(log n) times
// ! any node in the Heap can give the details about its parent/left child and right child within the array
// * For a node N, index of it's
// * parent can be given by (N - 1) / 2
// * Left child given by (N*2)+1
// * Right child given by (N*2)+2

export default class HeapHelpers {
  constructor() {
    this.dataStore = [];
  }
  __swapHelper = (index1, index2) => {
    const temp = this.dataStore[index1];
    this.dataStore[index1] = this.dataStore[index2];
    this.dataStore[index2] = temp;
  };
  __parentIndexOf = (nodeIndex) => {
    return Math.floor((nodeIndex - 1) / 2);
  };
  __leftIndexOf = (nodeIndex) => {
    return nodeIndex * 2 + 1;
  };
  __rightIndexOf = (nodeIndex) => {
    return nodeIndex * 2 + 2;
  };
  parentOf = (nodeIndex) => {
    return this.dataStore[this.__parentIndexOf(nodeIndex)];
  };
  leftChildOf = (nodeIndex) => {
    return this.dataStore[this.__leftIndexOf(nodeIndex)];
  };
  rightChildOF = (nodeIndex) => {
    return this.dataStore[this.__rightIndexOf(nodeIndex)];
  };
  peek = () => {
    return this.dataStore[0];
  };
  size = () => {
    return this.dataStore.length;
  };
}

