/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
let friends = [
  {
    firstName: 'Artsiom',
    lastName: 'Mezin'
  },
  {
    firstName: 'Ilia',
    lastName: 'Kantor'
  },
  {
    firstName: 'Christopher',
    lastName: 'Michael'
  },
];


let body = document.querySelector('body');

function makeFriendsList(friends) {
  let newDiv = document.createElement('ul');
  let newArr = [];
  for (let friend of friends) {
    newArr.push(friend.firstName + " " + friend.lastName)
  }
  for (let i = 0; i < newArr.length; i++) {
    newDiv.innerHTML = newDiv.innerHTML + `<li>${newArr[i]}</li>`;
  }
  return newDiv;
}


