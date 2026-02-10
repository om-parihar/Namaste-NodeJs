const fs=require('fs');
const https=require('https');

console.log("Hello World!");

var a=1231232;
var b=13412424;


//Sync
fs.readFileSync("./file.txt","utf8");
console.log("This will only run after setTimeout");


//Async
https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("Fetched data Successfully")
});

//Async
setTimeout(()=>{
    console.log("SetTimeout called after 5 seconds");
},5000);

//Async
fs.readFile("./file.txt","utf8",(err,data)=>{
    console.log("File data: ",data);
});

function multiplyFn(x,y){
    const result=a*b;
    return result;
}

var c=multiplyFn(a,b);

console.log("Multiplication result is : ",c);