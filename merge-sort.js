function mergeSort(arr) {
  if (arr.length === 1) return arr;
  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      swap(arr);
    }
    return arr;
  }
  const center = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, center));
  const right = mergeSort(arr.slice(center));
  return orderMerge(left, right);
}

function orderMerge(left, right) {
  const result = [];
  let leftIdx = 0;
  let rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] <= right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }
  if (leftIdx < left.length) {
    copyRest(result, left, leftIdx);
  }
  if (rightIdx < right.length) {
    copyRest(result, right, rightIdx);
  }
  return result;
}

function copyRest(target, arr, idx) {
  for (let i = idx, l = arr.length; i < l; i++) {
    target.push(arr[i]);
  }
}

function swap(arr) {
  const temp = arr[1];
  arr[1] = arr[0];
  arr[0] = temp;
}
