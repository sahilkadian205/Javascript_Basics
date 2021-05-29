//In javascript logical operators returns truthy or falsy (not true or false)
//Following are falsy values-
//''
//NaN
//undefined
//null
//0
//false

//Values other than falsy are truthy like 1,'hi',true and so on
//Short Circuit concept remains same

let result;
result = 'Sahil' && 120 && ''
console.log(result);  //'' is falsy will return '' (empty string)

result = 10 || undefined
console.log(result);  //10 is truthy so short circuit occurs and will get 10

result = undefined || null && 30.6
console.log(result);

result = undefined || 3000
console.log(result);

result = undefined || null && 3000
console.log(result);

result = null && undefined || 30 
console.log(result);

//Short-circuiting happens only if all opeators are && or || in an expression not combination of && and || operators.
//eg- 3 || null || undefined

//Short-circuiting will not happen in - null && undefined || 30 .It will be evaluated on basis of precedence and associativity rules.
//null && undefined || 30
//&& has higher precedence so null && undefined will be evaluated first which will result in null