
//завдання 1
let person = {
    firstName: 'Ivan',
    secondName: 'Ivanov',
    showData() {
        console.log(`${this.firstName} ${this.secondName}`)

    }
}
person.showData();
let newPerson = {};
for (const key in person) {
    newPerson[key] = person[key];
}
newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';
newPerson.showData();

//завдання 2
let MyMath = {
    a: 5,
    b: 2,
    sum() {
        console.log(`5 + 2 = ${this.a + this.b}`)
    },
    multiplication() {
        console.log(`5 * 2 = ${this.a * this.b}`)

    },
    division(){
        console.log(`5 / 2 = ${this.a / this.b}`)

    },
    subtraction(){
        console.log(`5 - 2 = ${this.a - this.b}`)

    }


}
MyMath.sum() 
MyMath.multiplication()
MyMath.division() 
MyMath.subtraction()