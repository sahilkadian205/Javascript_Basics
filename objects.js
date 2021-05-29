//Basics
const obj1 = {
    name:'Sahil',
    empDetails : {
        empId : 123,
        profile : 'Developer',
        companyName : 'TCS',
        yop:2,
        skills : ['Java','C++']
    },
    age:23,
    isEmployed : true
}

console.log(obj1.age);      //Dot notation
console.log(obj1['age']);   //Bracket Notation //Keys are always string. That's why we used age in string literal ''.
//Keys are always string.They are converted to string if we don't use string literals ('' , "" ,``)
for(key in obj1){
    console.log(typeof key)
}

//-------------------------------------------
//Factory Functions
//1.Returns object
//2.Follow camel case notation while defining function name

function createCircle(xcor,ycor,radius){
    return {
       x:xcor,
       y:ycor,
       radius,   //if key and value are same then we can write in this way as well else we can write radius:radius
       draw : function(){
           console.log('draw')
       },
       drawing : ()=>{            //we can use arrow function as well
            console.log('yo');
       }
    }
}

const circle1 = createCircle(1,2,5);
console.log(circle1);
circle1.drawing();

//--------------------------------------------
//Constructor Functions
//1.Follows pascal notation while defining function name
//2.new keyword is used to create object
//3.Constructor Functions returns 'this'. We don't need to write return this expilicitly

function Circle(x,y){
    this.x=x;  //this is a reference to current object
    this.y=y;
    this.draw = function(){
        console.log(x,y);
    }
    this.drawing = ()=>{
        console.log('This is arrow function');
    }
}

const circle2 = new Circle(1,2);
circle2.draw();

//What happens when we write new Circle(1,2);
//1.new creates a empty object {}
//2.Now empty object is assigned key:values defined in Circle
//3.In the end 'this' is returned and we get the object.We don't need to write return this expilicitly

//Dynamic Nature Of Objects
//Javascript objects are dynamic. We can add or delete properties.

const obj2 = {
    firstName:'John',
    age:20,
    lastName:'Cena'
}

obj2.lastName = 'Wick';  //we can change value
obj2.displayName = function(){          //we can add property
    console.log(this.firstName, this.lastName);
}
delete obj2.age; //we can delete property
console.log(obj2);

//Every object has a constructor property that references a function that was used to create that object
  
console.log(obj1.constructor); //created as new Object();

console.log(circle1.constructor);  //created as new Object();

console.log(circle2.constructor);  //created by Circle

//Functions are objects

function f1(){
    console.log('f1');
}

console.log(f1.constructor);  //Function() constructor is used to create function

//Value Types (Primitives) -
// Number
// String
// Boolean
// null
// undefined
// Symbol

//Primitives are copied by their value
let p1 = 10;
let p2 = p1;
p1 = 20;
console.log(p1, p2);

//Reference Types (Objects) -
// Object
// Array
// Function

//Objects are copied by their reference

let p3 = {value:10};
let p4 = p3;
p3.value = 20;
console.log(p3, p4);

// We can use spread operator (...) to copy values for reference type

let a1 = {value : 10};
let a2 = {...a1};
a1.value = 20;
console.log(a1, a2);

let a3 = [1,2,3];
let a4 = [...a3];
a3[0] = 0;
console.log(a3, a4);

//Objects are not iterable. We can't use for of loop for objects
const obj3 = {
    value:10,
    fun(){
        console.log('');
    }
}

for(key in obj3){
    console.log(key, obj3[key])
}

// for(value of obj3){
//     console.log(value);     //TypeError: obj3 is not iterable
// }

//We can use Object.keys(object) method which returns array of keys and array is iterable

for(key of Object.keys(obj3)){
    console.log(key)
}

//We can use Object.values(object) method which returns array of values and array is iterable

for(value of Object.values(obj3)){
    console.log(value);
}

//Object.entries(obj) returns array of key,value pair

for(entry of Object.entries(obj3)){
    console.log(entry);
}

//in keyword can be used to check property (key) exist or not.

if('value' in obj3){  //Keys are always string that's why used string literal
    console.log('Property Exist');
}


//Object Cloning

const obj4 = {
    value : 10,
    fun(){

    }
}

const objcop1 = {};    //Way1
for(key in obj4){
    objcop1[key] = obj4[key];
}

const objcop2 = Object.assign({},obj4);  //Way2

const objcop3 = {...obj4};  //Way3 - Using Spread Operator (Best and short way to copy)

const objcop4 = {value:20,...obj4,color:'red'} //We can add and override values. Value is written first that's why value will we overrided by obj4

//So first write ...obj and then values you want to override

const objcop5 = {...obj4,value:50}

obj4.value = 50;

console.log(obj4);
console.log(objcop1);
console.log(objcop2);
console.log(objcop3);
console.log(objcop4);
console.log(objcop5);