const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const usedNames = new Set();
  const result = [];

  for (const name of names) {
    let currentName = name;
    let k = 1;

    while (usedNames.has(currentName)) {
      const baseName = name;
      currentName = `${baseName}(${k})`;
      k++;
    }
    usedNames.add(currentName);
    result.push(currentName);
  }
  return result;
}

module.exports = {
  renameFiles
};
