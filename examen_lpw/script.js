/* 1.1 One-liner */
let n = [18, 35, 82, 12, 51, 94, 35, 21, 11, 44, 19, 6, 70, 54, 7, 48, 16, 22, 23];
let answer = n.filter(num => num%2 == 0).reduce((a, b) => { return a + b }, 0);
console.log(answer);