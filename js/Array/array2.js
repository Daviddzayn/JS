

// Operations: 


// add. remove 

// update


// let arr = [10,"apple",30,40,50,60]

// // arr[0] = 100

// arr[1] = "mango"    

// console.log(arr)



// push, pop  => end


// let arr = [10,20,30,40,50]

// arr.pop()  // [10,20,30,40]

// arr.pop() // [10,20,30]

// let x = arr.pop()

// arr.push(60)
// arr.push(60,70,80,90)

// let y = arr.push(100,200,300)

// console.log(y)



// shift and unshift => start

// let arr = [10,20,30,40,50]

// // let x = arr.shift() // x = 10

// let y = arr.unshift(100,200,300)

// console.log(arr, y)



// splice:


let arr = [10,20,30,40,50,60,70]

// arr.splice(2,3)

// arr.splice(0,1)

// arr.splice(1,0,100,200,300)

let x = arr.splice(2,0,100,200,300)

console.log(x)