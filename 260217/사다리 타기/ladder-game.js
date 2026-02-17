const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const lines = input.slice(1, 1 + m).map(line => line.split(' ').map(Number));

const position = Array(n+1);
const selectedLine = [];
let ans = Number.MAX_SAFE_INTEGER;
const res = Array(n+1);

lines.sort((a,b)=>a[1]-b[1]);

// console.log(lines)
function answer(){
    for(let i=1; i<=n; i++){
        res[i] =  [i,0];
    }

    for(let i=1; i<=n; i++){
        for(let j=0; j<lines.length; j++){
            const [x, y] = lines[j];
            if(res[i][1]<=y && res[i][0]===x){
                res[i][0]+=1;
                res[i][1]= y;
            }else if(res[i][1]<=y && res[i][0]===x+1){
                res[i][0]-=1;
                res[i][1]=y;
            }
        }
    }
}

function ladder(){
    for(let i=1; i<=n; i++){
    position[i] = [i,0];
    }

    for(let i=1; i<=n; i++){
        for(let j=0; j<selectedLine.length; j++){
            const [x, y] = selectedLine[j];
            if(position[i][1]<=y && position[i][0]===x){
                position[i][0]+=1;
                position[i][1]=y;
            }else if(position[i][1]<=y && position[i][0]===x+1){
                position[i][0]-=1;
                position[i][1]=y;
            }
        }
    }
}

function isValid(){
    ladder();
    // console.log(selectedLine)
    // console.log(position)
    
    for(let i=1; i<=n; i++){
        if(res[i][0]!==position[i][0]){
            return false;
        }
    }
    return true;
}

function choose(cnt){
    if(cnt===m){
        // console.log(cnt)
        if(isValid()){
            // console.log(position)
            // console.log(selectedLine)
            ans = Math.min(ans, selectedLine.length);
        }
        return;
    }
    
    selectedLine.push(lines[cnt]);
    choose(cnt+1);
    selectedLine.pop();

    choose(cnt+1);
}

answer();
choose(0);
console.log(ans);

// console.log(res)