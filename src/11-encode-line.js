/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const inputStr = str;
  let resultStr = '';
  let count = 1;
  const strArr = inputStr.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i + 1]) {
      count += 1;
    } else {
      resultStr += count > 1 ? (count + strArr[i]) : strArr[i];
      count = 1;
    }
  }
  return resultStr;
}
module.exports = encodeLine;
