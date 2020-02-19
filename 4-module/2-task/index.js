/**
 * @param {HTMLTableElement} table
 * @return {void}
 */


function makeDiagonalRed(arr) {
  for (let i = 0; i < arr.rows.length; i++) {
    arr.rows[i].cells[i].style.backgroundColor = 'red';
  }
}


