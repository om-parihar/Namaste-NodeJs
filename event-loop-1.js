const fs=require('fs');
const a=100;

setImmediate(()=> console.log("setImmediate"));

fs.readFile("./file.txt","utf8",()=>{
    console.log("File Reading");
});

setTimeout(()=>console.log("time expired"),1000);

function printA(){
    console.log("a=",a);
}

printA();
console.log("Last line of the file,");