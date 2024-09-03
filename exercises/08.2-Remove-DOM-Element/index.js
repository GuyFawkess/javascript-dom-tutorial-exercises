// Your code here
let list = document.querySelector('#parentLi');

console.log(list.childNodes)

let secondLi = list.childNodes[3];
list.removeChild(secondLi)