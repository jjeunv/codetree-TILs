const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

const arr = [];
const visited = Array(n+1).fill(false);

function solve(cnt){
    if(cnt===n){
        console.log(arr.join(' '));
        return;
    }

    for(let i=n; i>=1; i--){
        if(visited[i]) continue;

        arr.push(i);
        visited[i]= true;

        solve(cnt+1);

        arr.pop();
        visited[i]=false;
    }
}

solve(0);

