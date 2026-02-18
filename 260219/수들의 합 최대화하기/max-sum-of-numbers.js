const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

const arr = [];
const visited = Array(n).fill(false);

function calc(){
    let sum = 0;
    arr.forEach((n)=>sum+=n);
    return sum;
}

let ans = 0;

function solve(x){
    if(x===n){
        ans = Math.max(ans, calc());
        return;
    }

    for(let i=0; i<n; i++){
        if(visited[i]) continue;
            arr.push(grid[x][i]);
            visited[i]=true;

            solve(x+1);

            arr.pop();
            visited[i]=false;
        }
}

solve(0);

console.log(ans);