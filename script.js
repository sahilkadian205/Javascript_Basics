let a = '20';
console.log(a.length);
console.log(true == 1);
console.log(true);
console.log('Sahil' && '' && 'f');
if(' '){
    console.log(0b00100);
}

let val = true;
switch (val){
    case 1:
        console.log(1000);
        break;
    case true:
        console.log('yoyoyo');  
    case null:
        console.log('null value')      
}
 
const arr = {a:1,b:2,c:{yo:[1,2]},"d":"scsdc",}   //[10,20,30,40]
console.log(`---------------------------------------------${val+2}`)
for(ar in arr){
    console.log(typeof(ar), typeof(arr[ar]));
}

const obj = {
    draw : (a,b)=>console.log(a+b)
}

obj.draw(2,3);

