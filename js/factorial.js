

//factorial =>5 => 5*4*3*2*1 = 120;

//3=> 3*2*1 = 6;

//find the factorial of all numbers from 1 to 10.
  
let sum = 0;
 for(let i = 1; i <= 10; i++) {
    let fact = 1;
    for(let f= 1; f <= i; f++) {
        fact *= f; // calculate factorial
    
 }
    sum += fact; // add factorial to sum
 }
    console.log(sum); // Output the sum of factorials













// function sumOfFactorials(n) {
//     let sum = 0;
//     let currentFactorial = 1;
    
//     for (let i = 1; i <= n; i++) {
//         currentFactorial *= i;  
//         sum += currentFactorial;  
//     }
//     return sum;
// }

// console.log(sumOfFactorials(10)); 
