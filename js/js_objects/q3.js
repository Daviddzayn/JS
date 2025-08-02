

// Q3: 
let obj1 = {
    a:10,
    b:"apple",
    c: 30
}

let obj2 = {
    x: 100,
    y:200
}

// Object.assign

Object.assign(obj1, obj2)   // if u want return it returns obj1

console.log(obj1)

// console.log(x)

// console.log(obj1==x)





// combine both object onto one object.



// using spread operator:

// let obj3 = {r:12,...obj1,e:56}

// let obj3 = {...obj1, ...obj2}
// console.log(obj3)



// for(let t in obj1){
//     // console.log(t, obj1[t])

//     obj3[t] = obj1[t]
//     // {a: 10,b:"apple"}
// }


// for(let t in obj2){
//     // console.log(t, obj1[t])

//     obj3[t] = obj2[t]
//     // {a: 10,b:"apple"}
// }

// console.log(obj3)