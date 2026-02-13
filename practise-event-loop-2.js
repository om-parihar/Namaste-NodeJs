const fs=require("fs");
const a=100;

setImmediate(()=>console.log("setImmediate"));

setTimeout(()=>console.log("Timer expired"));

process.nextTick(()=>{
    console.log("nextTick3");
    console.log("process 3");
    process.nextTick(()=>{
        console.log("nextTick2");
        console.log("process 2")
        process.nextTick(()=>{
            console.log("nextTick 1");
            console.log("process 1");
        });
    });
});

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf8",()=>{
    console.log("Reading File");
});

const printA = () => {console.log("a=",a)};

printA();
console.log("Last line of the file");

// a=100
// Last line of the file
// nextTick 3
// process 3
// nextTick 2
// process 2
// nextTick 1
// process 1
// Promise
// Timer expired
// setImmediate
// Reading File