const person={}
person.name="kishore"
person.age=33
person.location="chennai" //add
console.log(person)
person.name="ganesh" // update
console.log(person)
delete person.age //delete
console.log(person)

class Student{
    constructor(name){
        this.name=name
    }
    greet(){
        console.log("hi"+" "+ this.name)
    }
}
let st1= new Student("fghj")
let st2=new Student("sdfghj")
console.log(st1.name) //dot method
console.log(st2["name"]) // brackets
st1.greet()


//Encapsulation
class Bank {
    #balance    // private property cant get outside
    constructor(balance){  
        this.#balance = balance
    }
    deposit(amount){
        this.#balance += amount
        console.log("your balance is " + this.#balance)
    }
    withdraw(amount){
        this.#balance -= amount
        console.log("your balance is " + this.#balance)
    }
}

let user1 = new Bank(0);  // default balance is 0
user1.deposit(500);      
user1.withdraw(200)

// inhertance
class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    greet(){
        console.log("hi I am " +this.name)
    }
}
class Employee extends Person{
    constructor(name,age,jobtitle) {
        super(name,age)
        this.jobtitle=jobtitle
    }
    work(){
        console.log("he is a " + this.jobtitle )
    }
}
const emp1=new Employee("kishore",12,"sde")
emp1.greet()
emp1.work()

//Polymophism
class Aminal{
    speak(){
        console.log("animal sound")
    }
}
class Dog extends Aminal{
    speak(){
        console.log("Woaf")
    }
}
class Cat extends Aminal{
    speak(){
        console.log("Meow")
    }
}
const a1=new Dog
const a2=new Cat
a1.speak()
a2.speak()

// Abstraction
 class bike{
    start(){
        this._engine()
        console.log(" get start")
    }
    _engine(){
        console.log("engine")
    }
 }
 const b1=new bike()
 b1.start()