export function getQuickSortAnimation(array) {
  const animations = [];
  // if (array.length <= 1) return array;
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

export function quickSortHelper(array, start, end, animations) {
  if (array.length > 1) {
    var part = partition(array, start, end, animations);
    if (start < part - 1) {
      quickSortHelper(array, start, part - 1, animations);
    }
    if (end > part) {
      quickSortHelper(array, part, end, animations);
    }
  }
  return array;
}

function partition(array, start, end, animations) {
  var pivotIdx = Math.floor((start + end) / 2);
  var pivot = array[Math.floor((start + end) / 2)];
  var i = start;
  var j = end;
  while (i <= j) {
    while (array[i] < pivot) {
      animations.push([i, pivotIdx]);
      animations.push([i, pivotIdx]);
      i++;
    }
    while (array[j] > pivot) {
      animations.push([j, pivotIdx]);
      animations.push([j, pivotIdx]);
      j--;
    }
    if (i <= j) {
      animations.push([i, j, 0]);
      animations.push([i, j, 1]);
      animations.push([i, array[j], j, array[i]]);
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
