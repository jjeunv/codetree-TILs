const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const arr = [];
const visited = Array(n+1).fill(false);

function solve(cnt){
    if(cnt===n){
        console.log(arr.join(' '));
    }

    for(let i=1; i<=n; i++){
        if(visited[i]) continue;

        arr.push(i);
        visited[i]= true;
        solve(cnt+1);

        arr.pop();
        visited[i]= false;
    }
    return;

}

solve(0);

