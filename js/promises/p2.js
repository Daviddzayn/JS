

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(2)
    }, 1000)
})
.then(v => {
    console.log(v)
    return v*2    //  new Promise((resolve,reject)=>resolve(v*2))
})
.then(v =>{
    console.log(v)
    return v*2
})
.then(v =>{
    console.log(v)

})


.catch(err =>{
    console.log(err)
})



Promise.resolve(10) 

//  new Promise((resolve, reject)=>resolve(10)) 