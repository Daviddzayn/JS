


// if num is div by 3 => hello
// if num is div by 5 => world
// if num is div by 3 and 5 => hello world


let n = 15; // You can change this value to test with different numbers

if (n % 3 === 0 && n % 5 === 0) {
    console.log("hello world");
}
else if (n % 3 === 0) {
    console.log("hello");
}
else if (n % 5 === 0) {
    console.log("world");
}