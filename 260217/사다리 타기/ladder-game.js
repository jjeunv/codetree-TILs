const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = input[0].split(' ').map(Number);
const lines = input.slice(1).map((line)=>{
    const [a,b] = line.split(' ').map(Number);
    return [b, a-1];
});

lines.sort((a,b)=>a[0]-b[0]);

let selectedLines = [];

let ans = m;

function possible(){
    let num1 = Array.from({length:n}, (_,i)=>i);
    let num2 = Array.from({length:n}, (_,i)=>i);

    lines.forEach(([_, idx])=>{
        [num1[idx], num1[idx+1]] = [num1[idx+1], num1[idx]];
    })
    selectedLines.forEach(([_, idx])=>{
        [num2[idx], num2[idx+1]] = [num2[idx+1], num2[idx]];
    })

    for(let i=0; i<n; i++){
        if(num1[i]!==num2[i]){
            return false;
        }
    }

    return true;
}

function findMinLines(cnt){
    if(cnt===m){
        if(possible()){
            ans = Math.min(ans, selectedLines.length);
        }
        return;
    }

    selectedLines.push(lines[cnt]);
    findMinLines(cnt+1);
    selectedLines.pop();

    findMinLines(cnt+1);
}

findMinLines(0);
console.log(ans);