/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let counter = 0;
  const newArr = arr;
  const clearArr = newArr.filter((item) => item !== -1);
  clearArr.sort((a, b) => a - b);

  for (let i = 0; i < newArr.length; i++) {
    if (arr[i] !== -1) {
      newArr[i] = clearArr[counter];
      ++counter;
    }
  }
  return newArr;
}

module.exports = sortByHeight;
