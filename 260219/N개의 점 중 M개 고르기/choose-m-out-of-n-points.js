const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const points = input.slice(1, Number(n) + 1).map(line => line.split(' ').map(Number));

const selected = [];

function calc(){
    let dist = 0;

    for(let i=0; i<m; i++){
        for(let j=i+1; j<m; j++){
            const [x1, y1] = selected[i];
            const [x2, y2] = selected[j];
            dist = Math.max(dist, Math.pow(x1-x2,2) + Math.pow(y1-y2,2));
        }
    }

    return dist;
}

let ans = Number.MAX_SAFE_INTEGER;

function solve(idx, cnt){
    if(cnt===m){
        ans = Math.min(ans, calc());
        return;
    }

    if(idx===n) return;

    selected.push(points[idx]);
    solve(idx+1, cnt+1);
    selected.pop();

    solve(idx+1, cnt);
}

solve(0,0);
console.log(ans);