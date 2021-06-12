// https://www.hackerrank.com/challenges/jesse-and-cookies/problem

class Heap {
  items = [];

  insert(val) {
    this.items.push(val);
    this.up(this.items.length - 1);
  }

  peek() {
    return this.items[0];
  }

  delete() {
    const last = this.items.pop();
    if (this.items.length === 0) return last;
    const first = this.items[0];
    this.items[0] = last;
    this.heapify();
    return first;
  }

  heapify() {
    let currentIndex = 0;
    let leftIndex = this.getLeftIndex(currentIndex);
    while (leftIndex < this.size - 1) {
      let childIndex = leftIndex;
      const rightIndex = this.getRightIndex(currentIndex);
      if (this.items[childIndex] > this.items[rightIndex]) {
        childIndex = rightIndex;
      }
      if (this.items[currentIndex] > this.items[childIndex]) {
        const temp = this.items[childIndex];
        this.items[childIndex] = this.items[currentIndex];
        this.items[currentIndex] = temp;
        currentIndex = childIndex;
        leftIndex = this.getLeftIndex(currentIndex);
      } else {
        break;
      }
    }
  }

  up(idx) {
    let currentIndex = idx;
    let parentIndex = this.getParentIndex(idx);
    while (
      this.items[currentIndex] < this.items[parentIndex] &&
      currentIndex !== 0
    ) {
      const temp = this.items[parentIndex];
      this.items[parentIndex] = this.items[currentIndex];
      this.items[currentIndex] = temp;
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(parentIndex);
    }
  }

  getParentIndex(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getRightIndex(idx) {
    return idx * 2 + 2;
  }

  getLeftIndex(idx) {
    return idx * 2 + 1;
  }

  get size() {
    return this.items.length;
  }
}

//          0
//        /   \
//       1     2
//      / \    /\
//     3   4  5  6

// const heap = new Heap();

// heap.insert(5);
// heap.insert(4);
// heap.insert(3);
// heap.insert(1);
// heap.insert(2);

// function getItems(heap) {
//   const result = [];
//   while (heap.size) {
//     result.push(heap.delete());
//   }
//   return result;
// }
// console.log(heap.items);
// console.log(getItems(heap));

function cookies(minSweetness, cookiesSweetness) {
  const minHeap = new Heap();
  cookiesSweetness.forEach(s => {
    minHeap.insert(s);
  });
  let operationsCount = 0;
  while (minHeap.peek() < minSweetness) {
    const firstMin = minHeap.delete();
    const secondMin = minHeap.delete();
    if (minHeap.size === 0) {
      return -1;
    }
    const newItem = firstMin + secondMin * 2;
    minHeap.insert(newItem);
    operationsCount++;
  }
  console.log("==", minHeap.items);
  return operationsCount;
}

console.log(
  cookies(
    47245,
    [
      3554, 2227, 8866, 9890, 212, 8669, 2423, 7651, 3878, 3379, 1419, 6134,
      5767, 859, 2848, 9309, 1449, 8408, 8041, 3367, 6676, 6382, 4136, 4871,
    ]
  )
);
