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

class HeapHelpers {
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

export class MinHeap extends HeapHelpers {
  constructor() {
    super();
  }
  // ! insertion takes place in the end of the array, then the element check will bubble up to the root element to look for swapping conditions
  insert = (element) => {
    this.dataStore.push(element);
    var currentIndex = this.size() - 1;
    while (currentIndex != 0) {
      // swapping condition
      if (this.parentOf(currentIndex) > this.dataStore[currentIndex]) {
        this.__swapHelper(currentIndex, this.__parentIndexOf(currentIndex));
      }
      currentIndex = this.__parentIndexOf(currentIndex);
    }
  };
  // ! We can only remove the top node of a heap
  // ! We will replace the top element with the last element of the array
  // ! Then we will bubble down towards the leafs to check for swapping conditions
  remove = () => {
    const top = this.dataStore[0];
    this.dataStore[0] = this.dataStore[this.size() - 1];
    var currentIndex = 0;
    while (currentIndex <= 10) {
      if (this.leftChildOf(currentIndex) < this.rightChildOF(currentIndex)) {
        if (this.dataStore[currentIndex] > this.leftChildOf(currentIndex)) {
          this.__swapHelper(currentIndex, this.__leftIndexOf(currentIndex));
        }
        currentIndex = this.__leftIndexOf(currentIndex);
      } else if (
        this.leftChildOf(currentIndex) > this.rightChildOF(currentIndex)
      ) {
        if (this.dataStore[currentIndex] > this.rightChildOF(currentIndex)) {
          this.__swapHelper(currentIndex, this.__rightIndexOf(currentIndex));
        }
        currentIndex = this.__rightIndexOf(currentIndex);
      }
    }
    return top;
  };
}

var minHeap = new MinHeap();
minHeap.insert(4);
minHeap.insert(10);
minHeap.insert(20);
minHeap.insert(9);
minHeap.insert(17);
minHeap.insert(12);
minHeap.insert(3);
minHeap.insert(7);
minHeap.insert(6);
minHeap.remove();
console.log(minHeap.dataStore);
