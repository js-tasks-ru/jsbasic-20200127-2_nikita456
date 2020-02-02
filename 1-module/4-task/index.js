/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */


function checkSpam(str) {
  let lower = str.toLowerCase();
  if (lower.indexOf('1xbet') != -1) {
    return true;
  } else if (lower.indexOf('xxxxx') != -1) {
    return true;
  } else {
    return false;
  }
}
checkSpam('london is the great XxXXX capital');
