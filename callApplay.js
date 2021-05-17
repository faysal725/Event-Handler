const normalPerson={

    firstName: "rahim",
    lastName: "uddin",
    salary: 15000,
    getFullName:function(){
        console.log(this.firstName, this.lastName);  // object er property evabe access korte hoy
    },
    
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;

    }
}


const heroPerson = {
    firstName: 'hero',
    lastName: "molom",
    salary:25000,
}


const friendlyPerson = {
    firstName: 'hero',
    lastName: "man",
    salary:50000,
}
// // normalPerson.chargeBill();
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);

// // console.log(heroPerson.salary);
// // console.log(normalPerson.salary);


// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(2);

// console.log(friendlyPerson.salary);


// Call

// normalPerson.chargeBill.call(heroPerson, 900, 200, 60);

// normalPerson.chargeBill.call(heroPerson, 900, 200, 60);
// normalPerson.chargeBill.call(heroPerson, 900, 200, 60);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 20);
// console.log(friendlyPerson.salary);


//APPLY
normalPerson.chargeBill.apply(heroPerson, [3000, 300 , 30]);
console.log(heroPerson.salary);