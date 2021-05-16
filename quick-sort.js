function quickSortWithAdditionalSpace(arr) {
  if (arr.length < 2) return arr;
  const pivotIdx = Math.floor(arr.length / 2);
  const pivot = arr[pivotIdx];
  const right = [],
    left = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIdx) continue;
    if (pivot > arr[i]) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (arr.length < 2) return arr;
  const pivot = partition(arr, left, right);
  if (left < pivot - 1) {
    quickSort(arr, left, pivot - 1);
  }
  if (right > pivot) {
    quickSort(arr, pivot, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[Math.floor((left + right) / 2)];
  let leftStart = left;
  let rightStart = right;
  while (rightStart > leftStart) {
    while (arr[leftStart] < pivot) leftStart++;
    while (arr[rightStart] > pivot) rightStart--;
    if (rightStart >= leftStart) {
      swap(arr, leftStart, rightStart);
      leftStart++;
      rightStart--;
    }
  }
  return leftStart;
}

function swap(arr, idx1, idx2) {
  const temp = arr[idx2];
  arr[idx2] = arr[idx1];
  arr[idx1] = temp;
}
