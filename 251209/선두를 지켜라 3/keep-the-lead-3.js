const MAX_T = 1000000;

const fs= require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N,M] = input[0].split(' ').map(Number);

const posA = Array(MAX_T+1).fill(0);
let timeA = 1;
for(let i=1; i<=N; i++){
    let [v, t] = input[i].split(' ').map(Number);
    for(let j=0; j<t; j++){
        posA[timeA]=posA[timeA-1]+v;
        timeA++;
    }
}

const posB = Array(MAX_T+1).fill(0);
let timeB = 1;
for(let i=N+1; i<input.length; i++){
    let [v, t] = input[i].split(' ').map(Number);
    for(let j=0; j<t; j++){
        posB[timeB]=posB[timeB-1]+v;
        timeB++;
    }
}

if(timeA<timeB){
    for(let i=timeA; i<timeB; i++){
        posA[i]=posA[i-1];
    }
}else if(timeA>timeB){
    for(let i=timeB; i<timeA; i++){
        posB[i]=posB[i-1];
    }
}


let winner =0;
let cnt=0;
for(let i=1; i<Math.max(timeA,timeB); i++){
    if(posA[i]>posB[i]){
        if(winner!==1){
            winner=1;
            cnt++;
        }
    }else if(posA[i]<posB[i]){
        if(winner!==2){
            winner=2;
            cnt++;
        }
    }else{
        if(winner!==3){
            winner=3;
            cnt++;
        }
    }
}

console.log(cnt);