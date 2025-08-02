

// Promise.reject("Oops!")
// .then(result => console.log(result))
// .catch(error => {
// console.log("Caught: " + error);
// return "Recovered"; // Promise.resolve("Recovered");
// })
// .then(result => console.log(result));


let promise = new Promise((resolve, reject) => {
    resolve("Initial value");
    });
    promise
    .then((result) => {
    console.log(result); // "Initial value"
    return Promise.reject("Error occurred in first .then()");
    })
    .then((result) => {
    console.log(result); // This will be skipped
    })
    .catch((error) => {
    console.log(error);
    })