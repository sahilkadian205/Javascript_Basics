//let,const and var

//varibales declared with var are function scoped
function f1(){
    for(var i=0;i<5;i++){
        console.log(i);
    }
    console.log('Outside for loop i is:'+i);
}
f1();

//varibales declared with const and let are block scoped

function f2(){
    for(let i=0;i<5;i++){
        console.log(i);
    }
    //console.log('Outside for loop i is:'+i);  //Error - ReferenceError: i is not defined
}
f2();