/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */


function isEmpty(obj) {
  if (Object.keys(obj).length == 0) {
    return true;
  }
  return false;
}

let schedule = {};


