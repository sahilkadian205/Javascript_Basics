//this referneces to the object that executing current function.
//method - (methods are function declared in class or object). For method this references to the object executing or calling the method
//function - for simple functions this references global objects (window - for browsers, global - for node)

const video = {
    title : 'a',
    play(){
        console.log(this)
    }
}
video.play();


function Video(title){
    this.title = title;
    console.log(this);
}

const vid = new Video('b');

function fun(){
    console.log(this);
}
fun();

const video1 = {
    title : 'v1',
    tags : ['a','b','c'],
    showTags(){
        this.tags.forEach(function(val){
            console.log(this.title ,val);   //this.title will be undefined because here this is inside a function and for normal function this 
                                            //references to window or global object
        })
    }
}

video1.showTags();

const video2 = {
    title : 'v1',
    tags : ['a','b','c'],
    showTags(){
        this.tags.forEach(function(val){
            console.log(this.title ,val);   //this.title will be undefined because here this is inside a function and for normal function this 
        },this)                             //references to window or global object,So pass this as a second argument in foreach method
    }
}

video2.showTags();

//But lets suppose we have some method that doesn't have this as a parameter

//Solution 1 - create and variable and store this in that.We generally name these variable as that or self.You can use other name as well.
const video3 = {
    title : 'v1',
    tags : ['a','b','c'],
    showTags(){
        const self = this;
        this.tags.forEach(function(val){
            console.log(self.title ,val);    
        })                             
    }
}

video3.showTags();

//Solution 2 - Use arrow function. Arrow function inherits this from container object

const video4 = {
    title : 'v1',
    tags : ['a','b','c'],
    showTags(){
        this.tags.forEach((val) => {
            console.log(this.title ,val);    
        })                             
    }
}

video4.showTags();