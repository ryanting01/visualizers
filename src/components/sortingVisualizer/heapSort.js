// export function heapSort(array) {
//   let length = array.length;
//   let i = Math.floor(length / 2 - 1);
//   let k = length - 1;

//   while (i >= 0) {
//     heapify(array, length, i);
//     i--;
//   }

//   while (k >= 0) {
//     [array[0], array[k]] = [array[k], array[0]];
//     heapify(array, k, 0);
//     k--;
//   }
//   return array;
// }

// function heapify(array, n, i) {
//   var largest = i;
//   var l = i * 2 + 1;
//   var r = i * 2 + 2;

//   if (l < n && array[largest] < array[l]) {
//     largest = l;
//   }

//   if (r < n && array[largest] < array[r]) {
//     largest = r;
//   }

//   if (largest != i) {
//     [array[i], array[largest]] = [array[largest], array[i]];
//     heapify(array, n, largest);
//   }
//   return array;
// }

export function getHeapSortAnimation(array) {
  const animations = [];
  heapSortHelper(array, animations);
  return animations;
}

function heapSortHelper(array, animations) {
  let length = array.length;
  let i = Math.floor(length);
  let k = length - 1;

  while (i >= 0) {
    heapify(array, length, i, animations);
    i--;
  }

  while (k >= 0) {
    [array[0], array[k]] = [array[k], array[0]];
    heapify(array, k, 0, animations);
    k--;
  }
  return array;
}

function heapify(array, length, i, animations) {
  let largest = i;
  let left = i * 2 + 1;
  let right = i * 2 + 2;

  if (left < length && array[left] > array[largest]) {
    largest = left;
    animations.push([left, largest]);
    animations.push([left, largest]);
    animations.push([largest, array[left], left, array[largest]]);
  }
  if (right < length && array[right] > array[largest]) {
    largest = right;
    animations.push([right, largest]);
    animations.push([right, largest]);
    animations.push([largest, array[right], right, array[largest]]);
  }
  if (largest != i) {
    [array[i], array[largest]] = [array[largest], array[i]];
    animations.push([i, largest]);
    animations.push([i, largest]);
    // animations.push([i, array[largest], largest, array[i]]);
    animations.push([largest, array[i], i, array[largest]]);
    heapify(array, length, largest, animations);
  }
  return array;
}
