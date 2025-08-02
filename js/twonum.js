


const readline = require("readline");

const code = readline.createInterface({
  input: process.stdin
});

const userInput = [];

code.on("line", (data) => {
  userInput.push(data);
});

// neglect code above it
code.on("close", () => {
   let input=userInput
   let a = parseInt(input[0])
   let b = parseInt(input[1])  
   
   let sum = a + b ;
  let diff = a-b;
  let product = a*b; 
  let quotient= a/b;
  let modulus = a%b;



console.log("sum");
console.log("diff");
console.log("product");
console.log("quotient");
console.log("modulus");
  
   
 });