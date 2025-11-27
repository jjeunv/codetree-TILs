const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
// Please Write your code here.

const days = [0,31,28,31,30,31,30,31,31,30,31,30,31];
const res = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

function getDays(m,d){
    let sum=0;
    for(let i=1; i<m; i++){
        sum+=days[i];
    }
    sum+=d;
    return sum;
}

let day = getDays(m2,d2)-getDays(m1,d1);

while(day<0){
    day+=7;
}

console.log(res[day%7])