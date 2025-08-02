

// 5! = 5 * 4 * 3 * 2 * 1 = 120


// a= 7, b = 4 
// //   ans of this expression:  (a!*b!)/(a-b)!


// // Find factorial of "a"
// let fa = 1
// for(let i = 1; i<=a; i++){
//     fa = fa*i
// }
// console.log(fa)


// // Factorial of "b"

// let fb = 1
// for(let i = 1; i<=b; i++){
//     fb = fb*i
// }
// console.log(fb)


// let fc = 1 

// for(let i = 1; i<=(a-b); i++){
//     fc = fc*i
// }

// console.log(fc)



// let finalAns = fa * fb / fc

// console.log(finalAns)



// function findFactorial(n){ // 5
//     let f = 1
//     for(let i = 1; i<=n; i++){
//         f = f*i
//         // f = f *i => 1 * 1 = 1
//         //f = f*i =>  1*2 = 2
//         //f = f*i =>  2* 3 = 6
//         //f = f*i =>  6* 4 = 24
//         //f = f*i =>  24* 5 = 120
        
//     }
//     // console.log(f)
//     return f
// }


// let x = findFactorial(7)

// let  y = findFactorial(4)

// let z = findFactorial(3)

// let finalAns = x*y/z


// console.log(finalAns)


//  Lets take a number  eg: 247 , 

// Step 1:  Make it a new number by squaring each digit , 2^2, 4^2, 7^2 = 4+16 +49 = 69
// also find sum of cube of each digit => 2^3, 4^3, 7^3 = 8+64+343 = 415
// Give me the final ans as sum of both numbers => 69 + 392 = 461


function power(n, x){
    let sum = 0
    while(n>0){// 345 , 34,3
        let rem = n%10 // 5,4,3
        sum = sum + rem**x // 25+16+9
        n = parseInt(n/10) // 34.5 => 3 =>0
    }
    return sum
}

// function cube(n){
//     let sum = 0
//     while(n>0){
//         let rem = n%10
//         sum = sum + rem**3
//         n = parseInt(n/10)
//     }
//     return sum
// }

console.log(power(247,2))
console.log(power(247,3))