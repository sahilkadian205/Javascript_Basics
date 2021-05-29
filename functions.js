//Function Declaration
function walk(){
    console.log('Walking');
}

//Function Expressions
const run = function(){
    console.log('function')
}

//Function Calling
walk();
run();


//Hoisting - is a process of moving function declartions to the top (in the file where function is declared) which is done by JS Engine.
//We can call declared functions before they are declared as they are moved to top - Hoisting
//Same is not with function expression. We need to define them first and then call them.

f1();  //No issues we can call before declaration of f1
function f1(){
    console.log('f1');
}

//f2();  //Error - ReferenceError: Cannot access 'f2' before initialization
const f2 = function(){
    console.log('f2');
}

f2();  //Can call after declaration. No issues.


//Arguments

//Each function has arguments property which contains arguments passed to the function.
//Using arguments property we don't need any parameter and can pass varying number of arguments to function

function sum(){
    let sum = 0;
    for(let value of arguments)   //Objects are not iterable. But,arguments is an iterable object.
        sum += value;
    return sum;    
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4));

//Rest operator ... (looks similar to spread operator)
//It should be last parameter in function

function discount(discount,...prices){
    const total = prices.reduce((a,b) => a+b);
    return total*(1-discount);
}

console.log(discount(0.1,20,30));

//Default Parameters  - Rule - give default values to all consecutive parameters to the right of it.
//This default parameter concept is taken from C++.

function interest(principal,rate = 3.5,years = 6){
    return principal * rate / 100 * years;
}

console.log(interest(1000,5,5));
console.log(interest(1000,5));
console.log(interest(1000));

//getters and setters and exception handling
//getters are used to fetch values. We use get keyword for getters.
//setters are used to set values.We use set keyword for setters.

const person = {
    firstName : 'John',
    lastName : 'Wick',
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name){
        if(typeof name !== "string")
            throw new Error('Name is not a string');
        const parts = name.split(' ');
        if(parts.length !== 2)
            throw new Error('Enter First And Last Name')
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

console.log(person.fullName); //we don't need to use () while calling getter
person.fullName = 'Sahil Kadian';
console.log(person.fullName);
try{
    person.fullName = null;
    //person.fullName = '';
}
catch(e){
    console.log(e.message);
}
