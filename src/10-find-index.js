/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const list = array;
  let low = 0;
  let hight = list.length - 1;
  while (low <= hight) {
    const mid = Math.floor((low + hight) / 2);
    const guess = list[mid];
    if (guess === value) {
      return mid;
    } if (guess > value) {
      hight = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}
module.exports = findIndex;
