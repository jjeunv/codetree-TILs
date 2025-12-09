const fs =require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n,m] = input[0].split(' ').map(Number);

const movesA = input.slice(1,1+n).map((move)=>move.split(' '));
const movesB = input.slice(1+n).map((move)=>move.split(' '));

const MAX_R = 2000000;

const arrA = Array(MAX_R+1).fill(0);
const arrB = Array(MAX_R+1).fill(0);

let timeA =0, curA =0;
for(let move of movesA){
    let [d, x] = move;
    x = Number(x);
    if(d ==='R'){
        while(x){
            curA++;
            timeA++;
            arrA[timeA] = curA;
            x--;
        }
    }else{
        while(x){
            curA--;
            timeA++;
            arrA[timeA] = curA;
            x--;
        }
    }
}

let timeB =0, curB =0;
for(let move of movesB){
    let [d, x] = move;
    x = Number(x);
    if(d ==='R'){
        while(x){
            curB++;
            timeB++;
            arrB[timeB] = curB;
            x--;
        }
    }else{
        while(x){
            curB--;
            timeB++;
            arrB[timeB] = curB;
            x--;
        }
    }
}

let flag = false;
let ans = 0;
for(let i=1; i<timeA+1; i++){
    if(arrA[i]===arrB[i]){
        console.log(arrA[i],arrB[i])
        flag=true;
        ans=i;
        break;
    }
}

console.log(flag?ans:-1)

