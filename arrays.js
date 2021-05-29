const arr1 = [5,6];

//Adding Elements

//Begining
arr1.unshift(1,2);

//End
arr1.push(7,8);

//Given Position
arr1.splice(2,0,3,4);    //2 - position, 0 - number of elements to delete, 3,4- elements to be added

console.log(arr1);

//Finding elements (Primitive Type)

//indexOf returns -1 if element doesn't exist else index of the element
console.log(arr1.indexOf(6));
console.log(arr1.indexOf(10));
console.log(arr1.indexOf('3'));

//includes returns true if element exist else false
console.log(arr1.includes(5));
console.log(arr1.includes(200));
console.log(arr1.includes('4'));

//Finding Elements (Reference Type)

//Use find method
const arr2 = [
    {id1:'a',id2:'b'},
    {id1:'c',id2:'d'}
];

console.log(arr2.find(function(element){
    return element.id2 === 'd';
}))

//Removing Elements

const arr3 = [1,2,3,4,5,6,7,8]

//Begining
arr3.shift();

//End
arr3.pop();

//Given Position
arr3.splice(3,2);  //3-index from where we want to delete , 2- number of elements to delete

console.log(arr3);


//Emptying an array
const arr4 = [1,2,3,4,5,'s'];

arr4.length = 0; //Way1

arr4.splice(0,arr4.length);  //Way2

console.log(arr4);

let arr5 = [1,2,3,4,5,'s'];
let arr6 = arr5;

arr5 = [];  // Way3 - Use this if arr reference is not const.

//But there is one issue in this approach (Way3). If we have some other reference to this array then it will still hold old array.So, we should use
//this if we don't have any other reference to this array.
console.log(arr5);
console.log(arr6);

//Combine and Slice

const first  = [1,2,3];
const second  = [4,5,6];

const combined1 = first.concat(second);
console.log(combined1);

const combined2 = [...first,...second];   //Using spread operator
console.log(combined2);

const combined3 = [...first,'a',...second,'b'];   //Using spread operator we can add other elements as well
console.log(combined3);

const sliced1 = combined1.slice(2,4);  //2-start index,4-last index
console.log(sliced1);

const sliced2 = combined2.slice(1);  //3-start index and till end
console.log(sliced2);

//Iterating Arrays
for(let value of combined1){
    console.log(value);
}

combined2.forEach(function(number,index){
    console.log(index, number);
});

//or use arrow function
combined2.forEach((number,index) =>  console.log(index, number));

//Join method
str = "My Name Is Sahil";
const splittedArray = str.split(' ');
const joined = splittedArray.join("-");
console.log(joined);


//Sorting Arrays

//Sort Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second 
//argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.

const arr7 = [26,3,2,5,1,0]
arr7.sort();
console.log(arr7);  //will get wrong answer [ 0, 1, 2, 26, 3, 5 ] becuase 'elements are sorted in ascending, ASCII character order'

//We can use callback function
arr7.sort((a,b) => a-b);
console.log(arr7);

const courses = [
    {id:1,course:'Node.js'},
    {id:1,course:'javascript'}
];

courses.sort((a,b)=>{
    const aName = a.course.toUpperCase();
    const bName = b.course.toUpperCase();
    if(aName < bName) return -1;
    if(aName > bName) return 1;
    return 0; 
})

console.log(courses);

//Filtering Array

const arr8 = [1,-2,3,4,-1];
const filArr1 =  arr8.filter(n=>n>=0);
console.log(arr8, filArr1);

const restraunts = [
    {name:'a',isOpen:true},
    {name:'b',isOpen:true},
    {name:'c',isOpen:false},
    {name:'d',isOpen:false},
    {name:'e',isOpen:true}
];

const openedRestraunts = restraunts.filter((obj)=>obj.isOpen);
console.log(openedRestraunts);

//Mapping Array

const mappedArr1 = arr8.map((val) => '<li>'+val+'</li>');
console.log(mappedArr1);
console.log("<ul>"+mappedArr1.join("")+"</ul>");

const mappedArr2 = arr8.map((val)=>{
    return {id:Math.random(), value:val};
});
console.log(mappedArr2);

//Chaining

const result1 = arr8.
    filter(val => val > 0)
    .map(val => val*2);

console.log(result1);   

//Reduce - this method reduces the array into one single entity - (number,string,object,array and so on)

const result2 = arr8.reduce((accumulator,currentvalue) => {
    return accumulator+currentvalue;
});
console.log(result2);   //sum of numbers in array

//Excersises

//1. create a function except that takes an array and another array of excluding elements and returns new array

const arr9 = [1,2,4,7,90,-1,22]

function except(arr,excArr){
    let result = [];
    for(element of arr){
        if(!excArr.includes(element)){
            result.push(element);
        }
    }
    return result;
}

console.log(except(arr9,[1,-1]));

//2.Create a move method which takes an array,index and offset to move the elements in an array
const arr10 = [1,2,3,4];

function move(arr,index,offset){
    if(index+offset < 0 || index+offset >= arr.length){
        return 'Invalid Offset';
    }
    const output = [...arr];
    const element = output.splice(index,1)[0];
    output.splice(index+offset,0,element);
    return output;
}

const result3 = move(arr10,0,2);
console.log(result3);

//3.Count occurences of an element
const arr11 = [1,2,3,4,11,1,'1',52,1];

function countOccurences(arr,searchElement){
     return arr11.reduce((acc,val)=>{
         return acc + ((val === searchElement) ? 1 : 0);
     },0)
}

console.log(countOccurences(arr11,1));

//4.Create findMax method

const arr12 = [1,2,3,4,11,1,52,1];

function findMax(arr){
    if(arr.length === 0) return undefined;
    return arr.reduce((a,b)=> b > a ? b : a);
}

console.log(findMax(arr12));

//Movies

const movies = [
    {title:'a',year:2018,rating:4.5},
    {title:'b',year:2018,rating:4.7},
    {title:'c',year:2018,rating:3},
    {title:'d',year:2017,rating:4.5}
];

//All the movies in 2018 with rating > 4 and sort them by their rating descending order and pick their title only

const filMovies = movies
    .filter(movie => movie.year === 2018 && movie.rating > 4)
    .sort((a,b) => b.rating-a.rating)
    .map(val => val.title);

console.log(filMovies);