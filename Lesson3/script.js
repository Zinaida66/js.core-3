// завдання 1
let k = +prompt('Введіть число');
let life = 1;
for (i = 1; i <= k; i++) {
    life *= i;
};
document.write(`<h1>${life}</h1>`)

// Завдання 2
for (let count = 1000; count <= 9999; count += 3) {
    document.write(`<h4>${count}</h4>`);
}
// завдання 3
let n1 = 1;
for (i = 1; i <= 55; i++) {
    document.write(`<h3>${n1}</h3>`);
    n1 += 2;

}

// завдання 4

let n = 90;
for (let i = 0; i <= 18; i++, n -= 5) {

    document.write(`<h2>${n}</h2>`);
}
// завдання 5

let n3 = 2;
for (i = 1; i <= 20; i++) {
    document.write(`<h5>${n3}</h5>`);
    n3 *= 2;
}
// завдання 6

for (let a = 2; a <= 10000; a++, a = 2 * a - 1) {
    document.write(`<h3>${a}</h3>`);
}
// завдання 7

for (let a = -166;  a<=99;  a = 2 * a+200 ){
    if(a>-99 && a<99){
    document.write(`<h3>${a}</h3>`) 
    }
     
 }

// завдання 8

let m1 = parseFloat(prompt('Введіть число'));
let m2 = parseFloat(prompt('Введіть степінь'));
let result = 1;
if (m2 < 0) {
    m1 = 1 / m1;
    m2 = - m2;
}

for (let i = 1; i <= m2; i++) {
    result *= m1;
}
document.write(`${result}`);