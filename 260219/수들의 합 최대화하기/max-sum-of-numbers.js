const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

const arr = [];
const visited_x = Array(n).fill(false);
const visited_y = Array(n).fill(false);

function calc(){
    let sum = 0;
    arr.forEach((n)=>sum+=n);
    return sum;
}

let ans = 0;

function solve(cnt){
    if(cnt===n){
        ans = Math.max(ans, calc());
        return;
    }

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(visited_x[i] || visited_y[j]) continue;

            arr.push(grid[i][j]);
            visited_x[i]=true;
            visited_y[j]=true;

            solve(cnt+1);

            arr.pop();
            visited_x[i]=false;
            visited_y[j]=false; 
        }
    }
}

solve(0);

console.log(ans);