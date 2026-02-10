// const calculateSum=require('./xyz.js');

// const calculateMultiply = require("./calculate/multiply");

const {calculateMultiply,calculateSum}=require("./calculate");

// const {x,sum}=require('./sum.js');      //object destructuring
 
// import {x,sum} from "./sum.js";      //ES modules (ESM)

// const obj=require('./sum.js');

var name ='Node Js'
var a=10;
var b=20;
console.log(name);
// console.log(global);
// console.log(globalThis);
console.log(globalThis===global);

console.log(calculateSum(10,20));            //calling function

console.log(calculateMultiply(2,3));

// sum(1,1);                       //calling function

// obj.sum(2,2);                   //calling function

// console.log(obj.x);             //calling function     