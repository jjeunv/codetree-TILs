const fs =require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n,m] = input[0].split(' ').map(Number);

const movesA = input.slice(1,1+n).map((move)=>move.split(' ').map(Number));
const movesB = input.slice(1+n).map((move)=>move.split(' ').map(Number));

const OFFSET = 1000000;

const arrA = Array(OFFSET+1).fill(0);
const arrB = Array(OFFSET+1).fill(0);

let timeA = 0, curA =0;
let timeB = 0, curB =0;

for(let move of movesA){
    let [v,t] = move;
    while(t){
        curA+=v;
        timeA++;
        arrA[timeA] = curA;
        t--;
    }
}

for(let move of movesB){
    let [v,t] = move;
    while(t){
        curB+=v;
        timeB++;
        arrB[timeB] = curB;
        t--;
    }
}

let winner = 0, cnt=0;
for(let i=0; i<OFFSET+1; i++){
    if(arrA[i]>arrB[i]){
        if(winner!==1){
            cnt++;
            winner=1;
        }
    }else if(arrA[i]<arrB[i]){
        if(winner!==2){
            cnt++;
            winner=2;
        }
    }
}

if(cnt===0){
    console.log(cnt);
}else{
    console.log(cnt-1)
}