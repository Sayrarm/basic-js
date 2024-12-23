const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (!matrix) {
    return 0;
}

let catCount = 0;

for (let line = 0; line < matrix.length; line++) {
    const currentLine = matrix[line];
    if(!currentLine) continue;
    for (let column = 0; column < currentLine.length; column++) {
        if (currentLine[column] === '^^') {
            catCount++;
        }
    }
}
return catCount;
}

module.exports = {
  countCats
};
