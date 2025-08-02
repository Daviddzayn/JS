

// value and reference:


// Number, boolean and strings

// let a = 10

// let b = a  // photocopy

// a = 100


// console.log(a) //100
// console.log(b)


// Array and Objects:  referenceN/address


// let arr1 = [10,20,30,40,50]

// let arr2 = arr1


// arr1[0] = 100


// console.log(arr1)

// console.log(arr2)



// let a1 = [10,20,30] // 10000
// let a2 = a1  // 10000
// let a3 = a2  // 10000

// a2[1] = 56 

// a1[0] = 67 


// console.log(a3)


// pass by reference
// function hello(x2){
   
//     x2[0] = 100
// }


// let x1 = [10,20,30]

// hello(x1)

// console.log(x2)

// console.log(x1)


let a = 20 

function hello(a){ // 20
    a = 100 
    console.log("inner", a) //100
}



hello(a)

console.log("outer",a) //100,20