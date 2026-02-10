console.log("Hello World");

var a=1243524;
var b=2245;

// Async (it will only be called when the call stack is empty)
// setTimeout(()=>{
//     console.log("Call me after 3 seconds");
// },0);

setTimeout(()=>{
    console.log("Call me after 3 seconds");
},3000);

function multiplyFn(x,y){
    const result =a*b;
    return result;
}

var c=multiplyFn(a,b);

console.log("Multiplication result is : ",c);