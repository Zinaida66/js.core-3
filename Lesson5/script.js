//завдання 1
let pora = +prompt('Введіть число ')
switch (pora) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Літо');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осінь');
        break;

    default:
        console.log('визначить неможливо');
        break;
}
//завдання 2
let num = +prompt('Введіть число ')
function sayNomer(num) {
    for (let i = 2; i <= num; i++) {
        num = i / num;
        if (i % num == 0) {
            console.log('Це просте число')
        }
        else {
            console.log('Це число не є простим');
        }
    }

}
sayNomer(num);






// завдання 3

function sumElem(...arg) {
    let max = arg[0];
    for(let i = 0; i < arg.length; i++)
    if(max < arg[i]){
        max = arg[i];

    }
    console.log(max);
}
sumElem(-1, 3, -4, 9);
