// Insertion sort
export const insertionSort = (randomNumbers) => {
    const numbers = [...randomNumbers];
    const len = numbers.length;
  
    for (let i = 1; i < len; i++) {
      let currentElement = numbers[i];
      let j = i - 1;
  
      while (j >= 0 && numbers[j] > currentElement) {
        numbers[j + 1] = numbers[j];
        j--;
      }
  
      numbers[j + 1] = currentElement;
    }
  
    return numbers;
  };
  
  // Selection sort
  export const selectionSort = (randomNumbers) => {
    const numbers = [...randomNumbers];
    const n = numbers.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (numbers[j] < numbers[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        [numbers[i], numbers[minIndex]] = [
          numbers[minIndex],
          numbers[i],
        ];
      }
    }
  
    return numbers;
  };
  
  
  // Bubble sort
  export const bubbleSort = (randomNumbers) => {
    const numbers = [...randomNumbers];
  
    for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
          const temp = numbers[j];
          numbers[j] = numbers[j + 1];
          numbers[j + 1] = temp;
        }
      }
    }
  
    return numbers;
  };
  
  
  // Quick sort
  const quickSort = (a) => {
    if (a.length <= 1) {
      return a;
    }
  
    const pivot = a[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < a.length; i++) {
      if (a[i] < pivot) {
        left.push(a[i]);
      } else {
        right.push(a[i]);
      }
    }
  
    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);
  
    return [...sortedLeft, pivot, ...sortedRight];
  };
  
  export const performQuickSort = (randomNumbers) => {
    const numbers = quickSort(randomNumbers);
    return numbers;
  };
  
  
  
  // Merge sort
  const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  };
  
  const mergeSort = (a) => {
    if (a.length <= 1) {
      return a;
    }
  
    const mid = Math.floor(a.length / 2);
    const left = a.slice(0, mid);
    const right = a.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  };
  
  export const performMergeSort = (randomNumbers) => {
    const numbers = mergeSort(randomNumbers);
    return numbers;
  };
  
  
  // Shell sort
  const shellSort = (a) => {
    const len = a.length;
    let gap = Math.floor(len / 2);
  
    while (gap > 0) {
      for (let i = gap; i < len; i++) {
        const currentElement = a[i];
        let j = i;
  
        while (j >= gap && a[j - gap] > currentElement) {
          a[j] = a[j - gap];
          j -= gap;
        }
  
        a[j] = currentElement;
      }
  
      gap = Math.floor(gap / 2);
    }
  
    return a;
  };
  
  export const performShellSort = (randomNumbers) => {
    const numbers = shellSort([...randomNumbers]);
    return numbers;
  };