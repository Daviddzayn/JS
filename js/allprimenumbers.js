
// Print  all the prime numbers from  1 to 100.

for(let i = 1; i <= 100; i++) {

    let factors = "";

    let count = 0;
    for(let k = 1; k <= i; k++) {
         if(i % k == 0){
            //factors = factors + k + " ";
            count++;

         }
         

         }
         // console.log("Factors of " + i + " are: " + factors); 
         
          if(count == 2) {
            console.log(i + " is a prime number"); 
          } 

        
}






// Print all the armstrong number from 1 to 10000.
