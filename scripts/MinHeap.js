import HeapHelpers from "./MaxMinHeapHelper.js";
import { timer, timerForHundred, timerForThousand } from "./timer.js";
import { autoInsertToTest } from "./BinarySearchTree.js";
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
    this.dataStore[0] = this.dataStore.pop();
    var currentIndex = 0;
    var comparisonCount = 1;
    // ! 4 levels will need 3 comparisons
    var comparisonLimit = Math.floor(Math.log2(this.size()));

    //   ! special case for last 2-3 elements
    if (comparisonLimit == 1) {
      if (this.leftChildOf(currentIndex) && this.rightChildOF(currentIndex)) {
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
      } else if (!this.leftChildOf(currentIndex)) {
        if (this.dataStore[currentIndex] > this.rightChildOF(currentIndex)) {
          this.__swapHelper(currentIndex, this.__rightIndexOf(currentIndex));
        }
      } else if (!this.rightChildOF(currentIndex)) {
        if (this.dataStore[currentIndex] > this.leftChildOf(currentIndex)) {
          this.__swapHelper(currentIndex, this.__leftIndexOf(currentIndex));
        }
      }
    }

    //   ! normal case
    while (comparisonCount <= comparisonLimit) {
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
      comparisonCount++;
    }

    return top;
  };
  // ! will lose the actual heap
  sort = () => {
    var sorted = [];
    for (let i = this.size() - 1; i >= 0; i--) {
      sorted.push(this.remove());
      //   this.dataStore.push(this.remove());
    }
    return sorted;
  };
}

var minHeap = new MinHeap();
// minHeap.insert(4);
// minHeap.insert(10);
// minHeap.insert(20);
// minHeap.insert(9);
// minHeap.insert(17);
// minHeap.insert(12);
// minHeap.insert(3);
// minHeap.insert(7);
// minHeap.insert(6);
// minHeap.insert(6);
// minHeap.insert(18);

// console.log(minHeap.sort());

// console.log(minHeap.size());
// minHeap.remove();
// timerForThousand(() => autoInsertToTest(100, minHeap.insert));
autoInsertToTest(100, minHeap.insert);
// timerForThousand(minHeap.sort);
console.log(minHeap.sort())

console.log(minHeap.dataStore);
