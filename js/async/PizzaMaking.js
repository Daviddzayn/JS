

// step 1: Give a call to Dominos  => 2sec
// step 2: Order Placed  => 1 sec
// step 3: Cook started Preparing Pizza base  => 5 sec
// Step 4: Cheese Crusut is created  => 2sec
// Step 5: Pizza is out for delivery  => 3 sec
// Step 6: Pizza is delivered to the customer => 7sec
// Step 7: We ate the Pizza => 1 sec

// console.log("Call to Domisnos")
// console.log("Order Placed ")
// console.log("Cook started Preparing Pizza base");
// console.log("Cheese Crusut is created");
// console.log("Pizza is out for delivery");
// console.log("Pizza is delivered to the customer");
// console.log("We ate the Pizza")

setTimeout(() => {
  console.log("Call to Dominos");
  setTimeout(() => {
    console.log("Order Placed ");
    setTimeout(() => {
      console.log("Cook started Preparing Pizza base");
      setTimeout(() => {
        console.log("Cheese Crusut is created");
        setTimeout(() => {
          console.log("Cheese Crusut is created");
          setTimeout(() => {
            console.log("Pizza is out for delivery");
            setTimeout(() => {
              console.log("Pizza is delivered to the customer");
              setTimeout(() => {
                console.log("We ate the Pizza");
              }, 1000);
            }, 7000);
          }, 3000);
        }, 2000);
      }, 2000);
    }, 5000);
  }, 1000);
}, 2000);

// setTimeout(()=>{
//     console.log("Call to Dominos")
// },2000)

// setTimeout(()=>{
//     console.log("Order Placed ")
// },3000)

// setTimeout(()=>{
//     console.log("Cook started Preparing Pizza base");
// },8000)