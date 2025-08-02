
//Take a number and find its factors.

// let n = 91;
// for(let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         console.log(i);
//     }
// }




// let n = 91;


// let i = 1;
// while (i <= n) {
//     if (n % i == 0) {
//         console.log(i);
//     }
//     i++;
// } 


// Take a number and find it is prime or not.


// let n = 26;

// let count = 0;
// for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         count++;
//     }
// }

// if (count == 2) {
//     console.log("prime");
// }
// else {
//     console.log("not prime");
// }


//Take a number and find all its digits.

// let n = 8093;

// while (n!= 0) {

//     let last = n % 10; // last digit
//     console.log(last); // print last digit
//     let remaining = parseInt(n / 10); // remaining number after removing last digit
//      n = remaining;  // update n to remaining number
       
//     // n = parseInt(n / 10); // update n to remaining number}
//}

// let n = 8093;

// for(let i = n; i != 0; i = parseInt(i / 10)) {
//     let last = i % 10; // last digit
//     console.log(last); // print last digit
// }







//Take a number and print its digits in reverse order.

// let n = 8093;

// let rev = 0;
// while (n!= 0) {

//     let last = n % 10; 
//     rev = rev * 10 + last; // build the reverse number
//     n = parseInt(n / 10); 
// }

//  console.log(rev);

 // check if the number is palindrome or not

// let n = 1221;

// let t = n;

// let rev = 0;
// while (n!= 0) {

//     let last = n % 10; 
//     rev = rev * 10 + last; // build the reverse number
//     n = parseInt(n / 10); 
// }

//  console.log("rev", rev);
//  if (rev == t) {
//     console.log("palindrome");
//  }
//  else {
//     console.log("not palindrome");
// }


//Take a number and find it is armstrong or not.

//153 => 1^3 + 5^3 + 3^3 = 153

// let n = 153;
// let t = n;
// let sum = 0

// while (n != 0) {
//     let last = n % 10; // last digit
//     sum += last * last * last; // add the cube of the last digit to sum
//     n = parseInt(n / 10); // remove the last digit
// }
// if (sum == t) {
//     console.log("armstrong");
// }
// else {
//     console.log("not armstrong");
// }





// Print  all the prime numbers from  1 to 100.












// Print all the armstrong number from 1 to 10000.

