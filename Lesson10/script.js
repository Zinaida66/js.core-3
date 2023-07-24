// завданя1
 function arrCopy(arr){
    return arr.slice();
}
const arr1 = arrCopy([1,2,3])
console.log(arr1);
const arr2 = arrCopy([1,2,3,[10,20]])
console.log(arr2)


// завданя2
 arrToString =[1,2,3];
let arr3 = arrToString.join(' ')
console.log( arr3);
arrToString =[10,200,3333];
let arr4 = arrToString.join(' ')
console.log( arr4);

// завданя3

function getLength(arr) {
    let arr5 = [];
    for(let i = 0; i < arr.length; i++) {
        arr5[i] = arr[i].length;
    }
    return arr5;
}
console.log(getLength( ['Ivan','Pavlo','Ira']))

console.log(getLength( ['Oleksiy', 'Andriana']))

// завданя4
function removeDuplicates(arr){
   let arr7 = [];
   for(let index of arr){
    if(!arr7.includes(index.toLowerCase())){
        arr7.push(index);
    }
    
   }
   return arr7;
}
 console.log(removeDuplicates(['html','css','html','js']))
 

  