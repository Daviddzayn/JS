



let a = 0 


setTimeout(()=>{
    a = 100
    console.log("inside", a)
}, 2000)

setTimeout(()=>{
    console.log("second", a)
}, 5000)