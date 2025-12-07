const OFFSET = 100;
const MAX_R = 200;

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const lines = input.slice(1).map((line)=>line.split(' ').map(Number));

const grid = Array(MAX_R+1).fill(0);

for(let line of lines){
    let [start,end]=line;
    start+=OFFSET; end+=OFFSET;
    for(let i=start; i<end; i++){
        grid[i]++;
    }
}

console.log(Math.max(...grid))