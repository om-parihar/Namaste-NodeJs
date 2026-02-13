const fs=require("fs");
const a=100;

setImmediate(()=>console.log("setImmediate"));

setTimeout(()=>console.log("timer expired"),0);

process.nextTick(()=>console.log("nexttick"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf8",()=>{
    console.log("Reading file");
    
    setImmediate(()=>console.log("innersetImmediate"));

    process.nextTick(()=>{
        process.nextTick(()=>console.log("nextTick2"));
        console.log("nextTick3");
    });
});

const printA = ()=>{
    console.log("a=",a);
};

printA();
console.log("Last line of the file");