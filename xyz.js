console.log("xyz module exported");

function calculateSum(a,b){
    console.log(a+b);
}

module.exports=calculateSum;


/*(function (module){
 all the code of module is wrapped here

 })(module.exports={});  IIFE Imediately Invoked Function Expression 
 */