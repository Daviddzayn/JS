

// map and forEach 


// let arr = [10,20,30,40,50]

// arr.map(display)


// function map(display){

//     display(value, index)
// }




// function display(value, index){
//     console.log("Hii", value, index)
// }


// let arr = [10,20,30,40,50]


// arr.map((value, index)=>{console.log(value,index)})

// let display  = (value, index)=>{ console.log("Hii", value, index)}


// let arr = [10,20,30,40,50]

// let x =  arr.map((value, index)=>{ return(value*value)}) // [100,400]

// let x = arr.map((value,index)=>{
//     if(value%4 ==0){
//         return "Haha"
//     }
// })

// // [undefined,Haha,  undefined, haha, undefined]
// console.log(x)


// let arr = [10,20,30,40,50]

// let x =  arr.map(value=> value*value) // [100,400]

// arr.forEach(value=> console.log(value*value))

// console.log(x)


// filter:

// let arr = [10,20,30,40,50]

// let x = arr.filter((value, index)=>{ return value%4==0 })

// let x = arr.filter((value, index)=>{ return value%2==0 })

// let x = arr.filter((value, index)=>{ return value%9==0 })

// let x = arr.map((value, index)=>{ return value%4==0 })


// console.log(x)


// let arr = [10,20,30,40,50]

// let x = arr.find((value, index)=>{ return value%2==0 })



// console.log(x)




// reduce: 
x


// arr.reduce(display , 0)

// function display(sum, value, index){
//     console.log(sum, value)

//     return sum+value // 10
  
// }

// let x = arr.reduce((sum,value,index)=>{return sum+value },0)

// console.log(x)


// Take a array of string and return the length of each string, then return/print the odd length, finally find the sum of all odd length. 


// let strArr = ["sam", "hu", "jeyi", "hello"]

// [3,2,4,5] 
// [3,5]
// 8

// let x = strArr.map(value=> value.length)
// console.log(x)
// let y = x.filter(value=>value%2!=0)
// console.log(y)
// let z = y.reduce((sum,value)=> sum+value, 0)
// console.log(z)

// console.log(strArr.map(value=>value.length).filter(value=>value%2!=0).reduce((sum, value)=> sum+value,0))