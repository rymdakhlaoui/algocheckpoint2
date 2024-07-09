function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let current = arr[i]; // Element to be compared
    let j = i - 1;

    // Compare current element with the sorted part of the array and move elements greater than current
    // one position to the right
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element into the correct position
    arr[j + 1] = current;
  }

  return arr;
}

// Example usage:
const array = [5, 2, 4, 6, 1, 3];
console.log("Original Array:", array);
insertionSort(array);
console.log("Sorted Array:", array);
