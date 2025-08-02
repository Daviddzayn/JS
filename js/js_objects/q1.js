

// Q1: Take an obj, and check if a key named "kite" exits in it or not.

let search = "kite"

let obj = {
    a: 10,
    b:20,
    kite:30,
    d:40
}

// in operator: 

console.log( search in obj)

// let flag = false
// for(let k in obj){
//     // console.log(k)
//     if(search == k){
//         console.log("Kite Key found")
//         flag = true
//     }
// }

// if(flag == false){
//     console.log("Kite key is missing")
// }

// console.log(obj["kite"])

// if(obj[search] == undefined){
//     console.log("Kite key is missing")
// }
// else{
//     console.log("Kite Key found")
// }