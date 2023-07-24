// 1 завдання
let arr1 = [5,6,7,8,9];
let result1 = arr1.reduce((sum, current) => sum + current, 0);
console.log(result1);

// 2 завдання

let arr2 =  [5,6,7,8,9];
let result2 = arr1.reduce((sum, current) => sum + current**2, 0);
console.log(result2);

//3 завдання
let arr3 = [{name: 'Ivan', country: 'Ukraine'},
{name: 'Petro', country: 'Ukraine'},
{name: 'Miguel', country: 'Cuba'}

]
const check = arr3.includes('Ukraine');
console.log(check);


// 4 завдання
let arr4 = [{name: 'Ivan', country: 'Ukraine'},
{name: 'Petro', country: 'Ukraine'},
{name: 'Miguel', country: 'Cuba'}
]
console.log(arr4.some(elem => elem = 'Cuba'))

//5 завдання
let arr5 = [1, 'string', [3, 4], 5, [6, 7]];
const arr5New = arr5.filter(Array.isArray)
console.log(arr5New)

//6 завдання
let arr6 = [1, 2, 3, 0, 4, 5, 6];
let index = arr6.indexOf(0);
let sum = arr6.slice(0, index).reduce((accum, num) => accum +  num, 0);
console.log(sum);


//7 завданння
let arr7 = [1, -2, 3, 0, 4, -5, 6, -11];
let result = arr7
    .filter(elem => elem >=0)
    .map(element => Math.sqrt(element))
console.log(result)
