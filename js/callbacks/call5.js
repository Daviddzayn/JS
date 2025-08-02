
function hello(x){
    console.log("x",x)
    // x = ()=>{console.log(3+4)} 
    // x = ()=>{console.log(7)}
    x()
}


let y = ()=>{console.log(3+4)}

// function y(){
//     console.log(3+4)
// }

// y()

hello(y)