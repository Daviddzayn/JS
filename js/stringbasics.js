
// let str1 = "hello"
// let str2 = 'world'
// let str3 = `hello world`

// console.log(str1, typeof str1);
// console.log(str2, typeof str2);
// console.log(str3, typeof str3);


// let a = 10
// let b = 20
// let ans = a + b;

//value of a is 10
//console.log("value of a is", a);

//value of b is 20
//console.log("sum of", a, "and", b, "is", ans);

 // string templating
// console.log(`value of a is ${a}`); 



// let x = 10
// let str=`david${4+2}`
// console.log(str)





// multi line supportive string


// let str = `im a string and i use to print
//  things inside me as it is`

//  console.log(str);



// let str = "david"

// //length of string

// // console.log(str.length); // 5

// for(let i = 0; i <= str.length-1; i++) {
//     console.log(i,str[i]); // prints each character in the string
// }





// for- of loop




// let str = "david"

// for(let i of str) {
//     console.log(i); // prints each character in the string
// }




// take a string and print it vowel


// let str = "david"

// for( let i of str) {
//     if(i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u') {
//         console.log(i); // prints each vowel in the string
//     }
// }





//take a string and reverse it.

 let str = "david"
let rev = "";

for(let i = str.length - 1; i >= 0; i--) {
    rev += str[i]; // build the reverse string
}
console.log(rev); // prints the reversed string