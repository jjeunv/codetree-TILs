const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.

const days=[0,31,28,31,30,31,30,31,31,30,31,30,31];

console.log((days[m1]-d1+1)+d2)