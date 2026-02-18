const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const cost = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

const visited = Array(n).fill(false);

let ans = Number.MAX_SAFE_INTEGER;

function solve(idx, cnt, value){
    if(cnt===n-1){
        if(cost[idx][0]===0) return;
        ans = Math.min(ans, value+cost[idx][0]);
        return;
    }

    for(let i=1; i<n; i++){
        if(visited[i]) continue;
        if(cost[idx][i]===0) continue;

        visited[i] = true;
        solve(i, cnt+1, value+cost[idx][i]);

        visited[i] = false;
    }
}

solve(0, 0, 0);

console.log(ans);
