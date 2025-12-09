const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n,m,k] = input[0].split(' ').map(Number);
const students_num = input.slice(1).map(Number);

const arr = Array(n+1).fill(0);

let ans=-1;
for(let num of students_num){
    arr[num]++;
    if(arr[num]>=k){
        ans=num;
        break;
    }
}

console.log(ans)