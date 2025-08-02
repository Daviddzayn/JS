

// Q2. Take an obj and check if it has a value "Ramesh" in it or not.

let obj = {
    a:10,
    b: "Rames",
    c: "Pankaj"
}

// for(let t in obj){
//     // console.log(obj[t])
//     if(obj[t] == "Ramesh"){
//         console.log("Found")
//     }
// }

function checkRamesh(){
    for(let t in obj){
        if(obj[t] == "Ramesh"){
            return "Found"
        }
    }

    return "Not Found"
}

console.log(checkRamesh())