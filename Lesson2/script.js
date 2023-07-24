//Завдання1 
let count = 0;
console.log('Count =', count);
let ask1 = prompt('1. Якого кольору небо?');
if (ask1.toLowerCase() === 'голубий' || ask1.toLowerCase() === 'блакитний') {
    console.log('Відповідь вірна');
    count++;
}
console.log('Count=', count);
let ask2 = prompt('2. Скільки має кольорів веселка?');
if (ask2.toLowerCase() === 'сім' || ask2.toLowerCase() === '7') {
    console.log('Відповідь вірна');
    count++;
}
console.log('Count=', count);
let ask3 = prompt('3. Скільки є пір року?');
if (ask3.toLowerCase() === 'чотири' || ask3.toLowerCase() === '4') {
    console.log('Відповідь вірна');
    count++;
}
console.log('Count=', count);
let ask4 = prompt('4. В яку пору року випадає сніг?');
if (ask4.toLowerCase() === 'Зима') {
    console.log('Відповідь вірна');
    count++;
}
console.log('Count=', count);
let ask5 = prompt('5. Найбільша тварина в світі?');
if (ask5.toLowerCase() === 'кит') {
    console.log('Відповідь вірна');
    count++;
}
console.log('Count=', count);
let ask6 = prompt('6. Назва найстарішого дерева в світі?');
if (ask6.toLowerCase() === 'Сосна довговічна') {
    console.log('Відповідь вірна');
    count++;
}

console.log('Count=', count);
let ask7 = prompt('7. Найвища гора в Україні?');
if (ask7.toLowerCase() === 'говерла') {
    console.log('Відповідь вірна');
    count++;
}
console.log('Count=', count);
let ask8 = prompt('8. Найвища гора в світі?');
if (ask8.toLowerCase() === 'еверест') {
    console.log('Відповідь вірна');
    count++;
}

console.log('Count=', count);
let ask9 = prompt('9. Найдовша річка в Україні?');
if (ask9.toLowerCase() === 'дніпро') {
    console.log('Відповідь вірна');
    count++;
}
console.log('Count=', count);
let ask10 = prompt('10. Скільки днів у році?');
if (ask10.toLowerCase() === '365') {
    console.log('Відповідь вірна');
    count++;
}
console.log('Count=', count);

//Завданя2
let exit = prompt("Ім'я");
if (exit.toLowerCase === 'Ольга') {
    let parol = prompt('Введіть пароль');
    if (parol == 'ЛОГОС') {
        console.log('Ласкаво просимо!')
    }
    else if (parol == null) {
        console.log('Вхід скасований')

    }
    else {
        console.log('Пароль невірний')

    }
}
else if (exit == null) {
    console.log('Вхід скасований')
}
else {
    console.log('Я вас не знаю')
};

//Завдання3

let life = prompt('Введіть число');
if (life>=1 && life<=2 ,life=12){
    console.log('Зима')
}
else if(life>=3 && life<6){
    console.log('Весна')
}
else if(life>=6 && life<9){
    console.log('Літо')
}
else if(life>=9 && life<=11){
    console.log('Осінь')
}
else {
    console.log('Визначить неможливо')
};
 