const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// Please write your code here.

let arr = new Array(n).fill(0);

for(let segment of segments){
    for(let i=segment[0]-1; i<segment[1]; i++){
        arr[i]+=1;
    }
}

console.log(Math.max(...arr))