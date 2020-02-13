/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let arr = str;
  let newArr = arr.split('-');
  let result = newArr.map((value, index) => {
    if (index == 0) {
      return value;
    } else {
      let x = value[0].toUpperCase() ;
      return b = x + value.slice(1);
    }
        
  });
  return result.join('');
}
    
    
