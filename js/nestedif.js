





// let ans = 100;

// if (ans > 30) {
//     console.log("A");
// if(ans > 120) {
//     console.log("c");

// }
// else {
//     console.log("D");

//     }

// }
// else {
//     console.log("B");


//  }







// Example of nested if and nested-in-if

let num = 75;

if (num > 50) {
    console.log("Number is greater than 50");
    if (num < 100) {
        console.log("Number is less than 100");
        if (num % 2 === 1) {
            console.log("Number is odd");
        } else {
            console.log("Number is even");
        }
    } else {
        console.log("Number is 100 or more");
    }
} else {
    console.log("Number is 50 or less");
}