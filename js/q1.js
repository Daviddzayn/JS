

let n = 4000

let ans = (n % 4 == 0 && n % 100 != 0) || (n % 400 == 0)


console.log(ans)