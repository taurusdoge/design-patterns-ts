const sourceArray = [ 1, 15, 2, 4, -5, 100, 555, 49, -13, 25];
// const smallArr = [22, 15];
// merge sort
const sortedArray = mergeSort(sourceArray.slice());
const found = binarySearch(15, sortedArray);
console.log(sortedArray, found);

function mergeSort(sourceArray: Array<number>): Array<number> {
  const sourceArrayLength = sourceArray.length;
  if (sourceArray.length <= 1) return sourceArray;
  
  const tempArr = [];
  const middle = sourceArrayLength / 2;
  
  return merge(
    mergeSort(sourceArray.slice(0, middle)),
    mergeSort(sourceArray.slice(middle))
  );
}

function merge(left: Array<number>, right: Array<number>) {
  const tempArr = [];
  const leftLength = left.length;
  const rightLength = right.length;

  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftLength && rightIndex < rightLength) {
    const leftNumber = left[leftIndex];
    const rightNumber = right[rightIndex];

    if (leftNumber < rightNumber) {
      tempArr.push(leftNumber);
      leftIndex++;
    } else {
      tempArr.push(rightNumber);
      rightIndex++;
    }
  }

  return tempArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function binarySearch(item: number, sourceArray: Array<number>): number {
  const middle = sourceArray.length / 2;
  const middleElement = sourceArray[middle];

  let tempArr;
  if (item < middleElement) {
    tempArr = sourceArray.slice(0, middle);
  } else if (item > middleElement) {
    tempArr = sourceArray.slice(middle);
  } else if (item === middleElement) {
    return item;
  }

  return binarySearch(item, tempArr);
}
