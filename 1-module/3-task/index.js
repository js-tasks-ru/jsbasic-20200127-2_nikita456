/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */


function ucFirst(str) {
  if (str == '') {
    return str;
  }
  let x = str[0].toUpperCase();
  let b = x + str.slice(1);
  return b;
}
let a = ucFirst('В');
  
console.log(a);
