const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const movesA = input.slice(1, 1 + n).map((move)=>move.split(' '))
const movesB = input.slice(1 + n).map((move)=>move.split(' '))

const MAX_T = 1000000;

const posA = Array(MAX_T+1).fill(0);
const posB = Array(MAX_T+1).fill(0);

let timeA = 1;
for(let move of movesA){
    let [t,d] = move;
    t = Number(t);
    for(let i=1; i<=t; i++){
        posA[timeA] = posA[timeA-1] + (d==='R'?1:-1);
        timeA++;
    }
}

let timeB = 1;
for(let move of movesB){
    let [t,d] = move;
    t = Number(t);
    for(let i=1; i<=t; i++){
        posB[timeB] = posB[timeB-1] + (d==='R'?1:-1);
        timeB++;
    }
}

let cnt=0;
for(let i=1; i<MAX_T+1; i++){
    let a = posA[i], b= posB[i], prevA = posA[i-1], prevB =  posB[i-1];
    if(timeA<=i){
        a = posA[timeA-1];
        prevA = posA[timeA-1];
    }
    if(timeB<=i){
        b = posB[timeB-1];
        prevB = posB[timeB-1];
    }

    if(a===b && prevA!==prevB) cnt++;
    
}

console.log(cnt)