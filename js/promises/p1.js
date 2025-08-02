

// let p1 = new Promise((resolve, reject)=>{
    
//     setTimeout(()=>{
//         resolve("Hello WOrld")

//     },2000)
// })

let p1 = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        reject("Hello WOrld")
    },2000)
})

console.log(p1)

p1.then((value)=>{
   console.log(value)
})

p1.catch((value)=>{
    console.log(value)
})