const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n,k] = input[0].split(' ').map(Number);
const lines = input.slice(1).map((line)=>line.split(' ').map(Number));

const arr = Array(n+1).fill(0);

for(line of lines){
    const [start, end] = line;
    for(let i=start; i<=end; i++){
        arr[i]+=1;
    }
}

console.log(Math.max(...arr));