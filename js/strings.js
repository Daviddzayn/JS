

// let str1 = "david";
// let str2 = "fernandez";

// let ans = str1 +str2;

// console.log(ans, typeof ans);



// let a = 20
// let b = 40

// let ans = a +b;
// console.log(ans, typeof ans);



// let a = "20"
// let b = "40"

// let ans = a +b;
// console.log(ans, typeof ans);





// let str = "david";
// let b = "40"

// let ans = str+b;
// console.log(ans, typeof ans);

 

// let n = 10
// let b = "true"
// let ans = n + b

// console.log(ans, typeof ans);


// let str= "hello"
// let b ="false"
// let ans1 = str + b;


// console.log(ans1, typeof ans1);



// //day 2


// let str = "DaVid"

// let vowels = "aeiouAEIOU"

// for(let t of str){

// if(vowels.indexof(t)>=0){


//   console.log(t)
// }
// }




// let str = "dddddddddddddddaviiiiiiiiiiiiiii"  //davi
// let s1=""

// for(let t of str){




// if(s1.indexOf(t)== -1){
//   s1 = s1 +t

// }
// }

//    console.log(s1)


//1. print all substring of a string.


  // let str = "david"
  //   for(let i = 0; i<=str.length-1; i++){

  //       // console.log("For index", i, "value", str[i]) // b
  //       let s1 = str[i] // "a"
  //       console.log(s1)
  //       for(let j = i+1; j<=str.length-1; j++){
  //          s1 = s1 + str[j] // "ab"
  //          console.log(s1)

  //       }
        
  //   }








//2. find all substring of a string that are palindrome.



    // let str = "davida"
    // for(let i = 0; i<=str.length-1; i++){

    //     // console.log("For index", i, "value", str[i]) // b
    //     let s1 = "" // "a"
    //     let s2 = ""

    //     for(let j = i; j<=str.length-1; j++){
    //        s1 = s1 + str[j] // "ab"


    //        s2 = str[j] + s2

    //     //    console.log(s1,s2)

    //     if(s1 == s2){
    //         console.log(s1)
    //     }


           

    //     }
        
    // }


//3.find all 4 length substring of a string.

  //  let str = "davidkumar"

  //  for(let i = 0; i<=str.length-4; i++){
  //    console.log(str.slice(i,i+4))
  //  }




//4.check if a string contains  all alphabets from a to z.. if ant single one is missing print missing.


// let allAlphabets = "abcdefghijklmnopqrstuvwxyz"
// let s = "a quick brown fox jumps over the lazy dog and then he went to the market to buy some milk"

// let count = 0
// for(let i = 0; i<=allAlphabets.length-1; i++){
//    if(s.indexOf(allAlphabets[i])>=0){
//       count++
//    }
// }

// if(count == 26){
//    console.log("String contains all alphabets")
// }
// else{
//    console.log("String does not contains all alphabets")
// }


//5. count number of words in a string.// david is dancing=> 3 word


// let str = "david is dancing on the floor"
// str = str+" "

// let word = ""

// for(let t of str){
//    if(t!=" "){
//      word = word + t // floor
//    }
//    else{
//      console.log(word)
//      word= "" 
//    }

// }








//6.print each words in a sentence in a new line.
// david is dancing => david, is, dancing



//7. take a name like david fernandez, display it as David Fernandez.



//8. take a sentence reverse each word in a sentence .
// david is dancing => divad si gnicnad




//9. take a string and replace it with its next character in the alphabet.
 //abc=>bcd, but if z comes replace it with a.



//10. take a string and increase its character bt k times.
//    if k = 2 ,a=>c,b=>d,c=>e ..... z=>b ,from z circle back to a.























//for(let row =1; row<=5; row++){
   // let str =""
   // for(let i=1; i<=row; i++){
    
  //      str = str+i


   // }

  //  console.log(str)

//}





//    let n =1

//    for(let row =1; row<=5; row++){

//     let str=""
//     for(let i=1; i<=n; i++){

//         str= str+i

//     }

//           console.log(str)
//            n= n+2

// }
