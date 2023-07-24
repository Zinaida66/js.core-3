'use strict';
//завдання1
let gap1 = prompt('Введіть текст');
let coint1 = 0;
for (let i = 0; i < gap1.length; i++) {
    if (gap1.charAt(i) == ' ') {
        coint1++;
    }
}
console.log(`${coint1}`);

//завдання2

let link = 'student@ukr.net';
let i = 1;
while (i) {
    let mySr = +prompt('Введіть емаіл');
    if(mySr=link){
      
        console.log('Привіт....');
    }
    else{
        console.log('Ви ввели не правильно email');

    }
    i--;
}




// завдання3

let myStr = prompt('Введіть текст');
let start = 0;
let coint = 0;
while (true) {
    let position = myStr.indexOf('html', start);
    if (position === -1) break;
    start = position + 1;
    coint++;
}
console.log(coint);

//завдання4

let str = prompt('Введіть адрес');
let last4 = str.slice(8);
console.log(last4);