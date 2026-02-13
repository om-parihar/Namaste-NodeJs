const fs=require('fs');
const a=100;

setImmediate(()=>console.log("setImmediate"));

setTimeout(()=>console.log("Timer expired"),0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf8",()=>{
    setTimeout(()=>console.log("2nd timer"),0);

    process.nextTick(()=>console.log("2nd nextTick"));

    setImmediate(()=>console.log("2nd setImmediate"));

    console.log("File Reading");
});

process.nextTick(()=>console.log("next Tick"));

console.log("Last line of the file");

//Last line of the file
//next Tick
//Promise
//Timer expired
//setImmediate
//file reading
//2nd nextTick
//2nd setImmediate
//2nd Timer