const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.

const days=[0,31,28,31,30,31,30,31,31,30,31,30,31];

function day(m,d){
    let sum=0;
    for(let i=1; i<m; i++){
        sum+=days[i];
    }
    sum+=d;
    return sum;
}

console.log(day(m2,d2)-day(m1,d1)+1);