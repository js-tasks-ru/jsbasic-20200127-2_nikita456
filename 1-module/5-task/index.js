/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */


function truncate(str, maxlength) {
  let a = str.length;
  if (a >= maxlength) {
    let b = str.slice(0, maxlength - 1) + '…';
    return b;
  } else {
    return str;
  }
}
