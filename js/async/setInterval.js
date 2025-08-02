

// for (let i = 1; i <= 10; i++) {
  
// }


function currentTime(){
    let date = new Date();
  console.log(date, typeof date);
  // console.log(date.getHours())
  // console.log(date.getMinutes())
  // console.log(date.getSeconds())
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  console.log(hr, ":", min, ":", sec);
}

setInterval(currentTime, 1000)