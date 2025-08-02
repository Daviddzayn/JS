

// hof  => Higher order functions: 



// function hello1(f1){

// }


// function hello1(){
    
//     return f1
// }



function hello(){
    console.log("A")
    return ()=>{
        console.log("B")
    }
}


// let x = hello()

// // x = ()=>{console.log("B")}

// x()

// hello()()



function hello(){
    console.log("A")
    return ()=>{
        console.log("B")
        return ()=>{
            console.log("C")
        }
    }
}


// hello()()()

let x = hello() 