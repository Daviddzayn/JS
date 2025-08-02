

function hello(fun){
    console.log("fun",fun) // fun = ()=>{sum(10,20)}
   fun()
}

let sum = (a,b)=>{console.log(a,b)}

// let greet = ()=>{console.log("Good Morningng")}

// hello(greet)

// hello(sum(10,20))

hello(()=>{sum(10,20)})

// let fun = ()=>{sum(10,20)}

// function fun(){
//     sum(10,20)
// }



// ()=>{console.log("Hii")}


// function xyz(){
//     console.log(3+4)
// }

// xyz()