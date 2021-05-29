//1. Variables declared with const can't be reassigned. But we can change or add or delete values to which const variable is referring

const arr = [1,2,3]
arr[0] = 10;  //we can change value
arr.push(30); //we can add value
arr.splice(1,1); //we can delete value
console.log(arr);
//arr = 'Hello';  //can't reassign const variable (Error - arr = 'Hello';  //can't reassign const variable)

const obj = {
    firstName:'John',
    age:20,
    lastName:'Cena'
}

obj.lastName = 'Wick';  //we can change value
obj.displayName = function(){          //we can add property
    console.log(this.firstName, this.lastName);
}
delete obj.age; //we can delete property
console.log(obj);

//obj = null;  //can't reassign const variable

//2.To access properties use this keyword while defining propeties for object. We can't directly use them.

const obj1 = {
    firstname : 'John',
    lastName : 'Wick',
    age : 28,
    displayAge : function(){
        //console.log('Age is:', age);  //Error - ReferenceError: age is not defined
        console.log('Age is:', this.age);   //use this keyword
    }
}

obj1.displayDetails = function(){
   // console.log(name , age);      //Error - ReferenceError: name is not defined   
    console.log(this.firstname, this.age);  //use this keyword
}

obj1.displayDetails();
obj1.displayAge();

//3.Keys in an object are always string

const obj2 = {
    name : 'Michael',
    age : 28,
    fun : function(){
        console.log('funtion');
    }
}

//console.log(obj2[name]);  //Error - ReferenceError: name is not defined
console.log(obj2['name']);  //That's why in bracket notation we use string literal as a property 

for(key in obj2){
    console.log(key, 'type -', typeof key)
}

//4.When we don't know property name in advance, use [] bracket notation

const propertyName = 'age';   //This value can change
console.log(obj2[propertyName]);