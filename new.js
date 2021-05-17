// কিভাবে নতুন অবজেক্ট বানানো হয়
// New ES6 Style 
class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new Person('Hero', 'man', 2000);
console.log(heroPerson);
const friendlyPerson = new Person('helo', 'kalam', 25000)
console.log(friendlyPerson);



// Old Style 
function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}


const oldPerson = new Person1('Grand', 'papa', 1200);
console.log(oldPerson);
