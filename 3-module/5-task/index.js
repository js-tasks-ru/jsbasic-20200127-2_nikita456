/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  let result = [];
  arr.filter(item => {
    if (item >= a && item <= b) {
      result.push(item);
    }
  });
  return result;
}

let filtered = filterRange(arr, 1, 4);
