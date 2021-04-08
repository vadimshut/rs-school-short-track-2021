/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount (s1, s2) {
  const s1Arr = s1.split('');
  const res = [];
  let str = s2;
  for (let i = 0; i < s1Arr.length; i++) {
    const index = str.indexOf(s1Arr[i]);
    if (index !== -1) {
      res.push(s1Arr[i]);
      str = (str.slice(0, index) + str.slice(index + 1));
    }
  }
  return res.length;
}

module.exports = getCommonCharacterCount;
