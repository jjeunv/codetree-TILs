const fs = require("fs");
const input = fs.readFileSync(0).toString().trim(' ').split('\n');

function hasCarry(a, b, c){
    while(true){
        if(a%10 + b%10 + c%10 >= 10){
            return true;
        }
        a/=10;
        b/=10;
        c/=10;

        if(a===0 && b===0 && c===0){
            return false;
        }
    }
}

const n = Number(input[0]);
const arr = input.slice(1).map(Number);

let maxNum = -1;

for(let i=0; i<n; i++){
    for(let j=i+1; j<n; j++){
        for(let k=j+1; k<n; k++){
            if(!hasCarry(arr[i], arr[j], arr[k])){
                maxNum = Math.max(maxNum, arr[i]+arr[j]+arr[k]);
            }
        }
    }
}

console.log(maxNum);