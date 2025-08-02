


// function hello(a,b,c,d,e){

//     console.log(a,b,c,d,e)

// }


// hello(10,20.5, true, [10,20], {a:10,b:20})

function hello(f1){
   f1()
}


function greet(){
    console.log("Good Morning")
    return 1000
}

// let x = greet() 

let y = greet

// console.log("x",x)
console.log("y",y)

y()