//завдання1
/*function fib(n){ 
    if(n <=1){ 
        return n;
    }
    return n = fib(n - 1) + fib(n - 2);
}
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));*/


function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));

//завдання2

let sumG = function (n, g) {
    let b1 = 1;
    let sum = 1;
    for (let i = 1; i < n; i++) {
        b1 *= g;
        sum += b1;
    }
    return sum;
};
console.log(sumG(5, 2));

let sumN = function () {
    let b1 = 1;
    let q = 2;
    let n = 5;
    let sum = 1;
    for (let i = 1; i < n; i++) {
        sum = b1*(1 - q ** n) / (1 - q);

    }
    return sum;
};
console.log(sumN());

//завдання3
let n1 = +prompt(`write first  number`);
let n2 = +prompt(`write second  number`);
let sN = (n1, n2) => {
    nextPrime: for (let i = n1; i <= n2; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        console.log(i);
    }
}
let simpleNumber = sN(n1, n2);
