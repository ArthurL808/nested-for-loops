/**
 * Returns a string representation of a 2-dimensional data structure
 * @param {number} depth
 * @param {number} [width=depth]
 * @returns {string}
 */
function nestedForLoops(depth, width = depth) {
  debugger;
  let result = "\n";

  // Write code here
  for (let i = 0; i < depth; i++) {
    for (let j = 0; j < width; j++) {
      result += `{x:` + `${[j]}, ` + `y:` + `${[i]}}`;
      if (j !== width - 1) {
        result += ", ";
      } else if (j === width - 1) {
        result += "\n";
      }
    }
  }
  return result;
}
console.log(nestedForLoops(3));
// To see your console output outside the tests add function calls here.
// console.log(nestedForLoops(4));
