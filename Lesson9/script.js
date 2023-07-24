// завданя1

let num = +prompt('Введіть радіус, для обчислення площі');
function getArea() {
   if (num > 0) {
      a = 2 * Math.PI * num;
      return "Площа " + a + " см^2" ; 
   }
   if (num !== 0) {
      return "Повинно бути числове значення";
   }
   else {
      return "Будь ласка, введіть радіус!";
   }
   }
console.log(getArea());
// завдання2

let num2 = +prompt('Введіть число');
function getSqrt() {
   if (num2 > 0) {
      k = Math.sqrt ( num2);
      return "Квадратний корінь з "+num2+"  дорівнює "+k ; 
   }
   if (num2 !== 0) {
      return "Повинно бути числове значення";
   }
   if(num2<0){
      return "Ведіть додатнє число."
   }
   else {
      return "Будь ласка, введіть число";
   }
   }
console.log(getSqrt());

// завдання3

function MyMath1(){
       return  Math.PI;
   }
   console.log( MyMath1());

function MyMath2(number, degree){
   return number**degree;
}
console.log( MyMath2(2,4));

function MyMath3(number){
   if(number>=0){
      return number;
   }
   if(number<0){
      return -number;
   }
}
console.log( MyMath3(-5));




MyMath = function(...number) {
   let max = number[0];
   for (let i = 0; i < number.length; i++)
     if (max < number[i]) {
       max = number[i];
     }
     return max;
};
console.log(MyMath(10, 36, 25, 74, 8))


MyMathx = function(...number) {
   let min = number[0];
   for (let i = 0; i < number.length; i++)
     if (min > number[i]) {
      min = number[i];
     }
     return min;
};
console.log(MyMathx(10, 36, 25, 74, 8))
