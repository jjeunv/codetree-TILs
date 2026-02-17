const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n,m,c] = input[0].split(' ').map(Number);
const weight = input.slice(1).map((line)=>line.split(' ').map(Number));
let a = [];
let maxVal = 0;

function findMaxSum(currIdx, currWeight, currVal){
    if(currIdx === m){
        if(currWeight <= c){
            maxVal = Math.max(maxVal, currVal);
        }
        return;
    }

    findMaxSum(currIdx+1, currWeight, currVal);

    findMaxSum(currIdx+1, currWeight+a[currIdx], currVal+a[currIdx]*a[currIdx]);
}

function findMax(sx, sy){
    a = weight[sx].slice(sy, sy+m);
    maxVal = 0;
    findMaxSum(0,0,0);
    return maxVal;
}

function intersect(a,b,c,d){
    return !(b<c || d<a);
}

function possible(sx1, sy1, sx2, sy2){
    if(sy1+m-1>=n || sy2+m-1 >=n){
        return false;
    }
    if(sx1 !== sx2){
        return true;
    }
    if(intersect(sy1, sy1+m-1, sy2, sy2+m-1)){
        return false;
    }
    return true;
}

let ans = 0;
for (let sx1 = 0; sx1 < n; sx1++) {
  for (let sy1 = 0; sy1 < n; sy1++) {
    for (let sx2 = 0; sx2 < n; sx2++) {
      for (let sy2 = 0; sy2 < n; sy2++) {
        if(possible(sx1,sy1,sx2,sy2)){
            const sum = findMax(sx1,sy1)+ findMax(sx2, sy2);
            ans = Math.max(ans, sum);
        }
      }
    }
  }
}

console.log(ans);
