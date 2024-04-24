function sum(a,b){
    return a+b;
}
function diff(a,b){
    return a-b;
}
function product(a,b){
    return a*b;
}
module.exports={
    sum,diff,product
}
const calc =require('./calculator.js');

console.log(calc.sum(3,2));
console.log(calc.diff(3,2));
console.log(calc.product(3,2));