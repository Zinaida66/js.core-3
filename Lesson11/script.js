document.body.style.backgroundColor = prompt('Введіть колір для фону сторінки');

document.body.style.fontFamily= prompt('Введіть тип шрифту для сторінки');

let h1 = document.getElementById('h1');
h1.style.textAlign = prompt('Введіть атребут для вирівнювання заголовка h1')

let fon = document.getElementById('p');
fon.style.backgroundColor = prompt('Введіть колір фону для параграфа з силками ')

let ref = document.querySelectorAll("p,a");
for(const elem of ref) {
    elem.style.color = prompt('Змінимо колір тексту у параграфі з посиланнями і для самих посилань');
}

let div = document.getElementById('div');
div.style.color =  prompt('Введіть колір для тексту у елементі div');

document.getElementsByTagName('ul')[0].style.listStyleType = prompt('Введіть тип маркера?');  

let li = document.querySelectorAll("a");
for (let i = 0; i<li.length; i++){
    let link = li[i].href = prompt(
        `Введіть силки на три сайти № ${i+1}`
    )
  
   li[i].text = link;
}
