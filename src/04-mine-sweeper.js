/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const lenMatrix = matrix.length;
  const lenInsideMatrix = matrix[0].length;
  const result = new Array(lenMatrix);

  for (let i = 0; i < lenMatrix; ++i) {
    result[i] = new Array(lenInsideMatrix).fill(0);
  }

  for (let i = 0; i < lenMatrix; ++i) {
    for (let j = 0; j < lenInsideMatrix; ++j) {
      if (matrix[i][j] === true) {
        if (i > 0 && j > 0) result[i - 1][j - 1] += 1;
        if (i > 0) result[i - 1][j] += 1;
        if (j > 0) result[i][j - 1] += 1;
        if (i > 0 && j < lenInsideMatrix - 1) result[i - 1][j + 1] += 1;
        if (i < lenMatrix - 1 && j > 0) result[i + 1][j - 1] += 1;
        if (i < lenMatrix - 1) result[i + 1][j] += 1;
        if (j < lenInsideMatrix - 1) result[i][j + 1] += 1;
        if (i < lenMatrix - 1 && j < lenInsideMatrix - 1) result[i + 1][j + 1] += 1;
      }
    }
  }
  return result;
}

module.exports = minesweeper;
