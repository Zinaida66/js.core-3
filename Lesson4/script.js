// 1 завдання
 let i = 5;
 while ( i>0){
    let num = +prompt('Введіть пароль');
    if(num =='Arsenal'){
       console.log('Запрошуємо на сайт')
    }
    else if (i<=5) {
        console.log(`Пароль не вірний, у вас залишилось ${i} спроб.`)
       i--;
    }
    else{
       
    }
    
 }
 console.log('Повторіть спробу пізніше');
 
 // 2 завдання

 // 1
 let k = +prompt('Введіть число');
 let life = 1;
 let com=1;
 while(  com<= k ){
    life *= com;
    com++;
 };
 document.write(`<h1>${life}</h1>`);

// 2
let count=1000;
while( count<=9999){
    document.write(`<h4>${count}</h4>`);
    count+=3;
}
// 3
let n1 = 1;
let lik=1;
while( lik<=55 ) {
    document.write(`<h3>${n1}</h3>`);
    lik+=2;
}

//  4

let n = 90;
let rol=0;
 while( rol<=18 ){
     document.write(`<h2>${n}</h2>`);
     rol++, n-=5;
}
//  5

let n3 = 2;
let pol = 1;
while( pol<=20 ){
    document.write(`<h5>${n3}</h5>`);
    pol++, n3*=2;
}
// 6
let a= 2;
while(  a<=10000  ){
  document.write(`<h2>${a}</h2>`);
  a++, a= 2*a-1;
} 
// 7
let akt= -166; 
while( akt<=99 ){
    if(akt>0 && akt<100)
    document.write(`<h4>${akt}</h4>`);
    akt++, akt =2*akt+200;
}
//  8

let m1 =parseFloat( prompt('Введіть число' ));
let m2 = parseFloat( prompt('Введіть степінь'));
let result = 1;
let ink=1;
while( ink<=m2 ){
  result *= m1;
  ink++;
  if(m2 < 0){
    m2= - m2;
}
}
document.write(`${result}`);