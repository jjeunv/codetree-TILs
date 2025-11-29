const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

// Please Write your code here.

function getDays(m,d){
    const days = [0,31,29,31,30,31,30,31,31,30,31,30,31];
    let sum=0;
    for(let i=1; i<m; i++){
        sum+=days[i];
    }
    sum+=d;
    return sum;
}

function numDay(str){
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days.indexOf(str);
}

let day = getDays(m2,d2)-getDays(m1,d1);
const num = numDay(A);
day-=num;

const res = 1 + Math.floor(day/7)

console.log(res)