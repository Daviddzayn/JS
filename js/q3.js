// take a number and check  if it is leap year or not



let n = 2100;




if (n % 4 == 0) {
    if (n % 100 == 0) {
        if (n % 400 == 0) {
            console.log("leap year1");
        } else {
            console.log("not a leap year2");
        }
    } else {
        console.log("leap year3");
    }
} else {
    console.log("not a leap year4");
}
