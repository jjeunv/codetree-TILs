const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1).map((s)=>s.split(' ').map(Number));

const arr = [];
let ans = 0;

function isOverlapped(seg1, seg2){
    const [ax1, ax2] = seg1;
    const [bx1, bx2] = seg2;
    return (ax1<=bx1 && bx1<=ax2) || (ax1<=bx2 && bx2<=ax2) ||
           (bx1<=ax1 && ax1<=bx2) || (bx1<=ax2 && ax2<=bx2);
}

function isValid(){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(isOverlapped(arr[i], arr[j])){
                return false;
            }
        }
    }
    return true;
}

function choose(cnt){
    if(cnt===n){
        if(isValid()){
            ans = Math.max(ans, arr.length);
        }
        return;
    }

    arr.push(segments[cnt]);
    choose(cnt+1);
    arr.pop();

    choose(cnt+1);
}

choose(0);
console.log(ans);