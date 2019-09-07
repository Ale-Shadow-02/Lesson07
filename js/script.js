'use strict';

let myAside = document.querySelectorAll('.books');
let myBook = document.querySelectorAll('.book');

myAside[0].insertBefore(myBook[1], myBook[0]);
myAside[0].insertBefore(myBook[4], myBook[3]);
myAside[0].appendChild(myBook[2]);

let myBody = document.querySelectorAll('body');
let myA = document.querySelectorAll('.adv');

myBody[0].setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

let myLet = document.querySelectorAll('a');
myLet[2].textContent = 'Книга 3. this и Прототипы Объектов';

myBody[0].removeChild(myA[0]);

let myUl = document.querySelectorAll('ul');
let myLi2 = myUl[1].querySelectorAll('li');
/* console.log(myUl); */
myUl[1].insertBefore(myLi2[6], myLi2[4]);
myUl[1].insertBefore(myLi2[8], myLi2[4]);

let myLi5 = myUl[4].querySelectorAll('li');
/* console.log('myLi5: ', myLi5); */
myUl[4].insertBefore(myLi5[2], myLi5[6]);
myUl[4].insertBefore(myLi5[9], myLi5[3]);
myUl[4].insertBefore(myLi5[5], myLi5[8]);

let newElem6 = document.createElement('li');
newElem6.textContent = 'Глава 8: За пределами ES6';
myUl[5].appendChild(newElem6);

let myLi6 = myUl[5].querySelectorAll('li');
/* console.log('myLi6: ', myLi6); */
myUl[5].insertBefore(myLi6[10], myLi6[9]);