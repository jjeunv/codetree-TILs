const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const [a, b, c] = input[1].split(' ').map(Number);
const [a2, b2, c2] = input[2].split(' ').map(Number);

// Please Write your code here.
function isValid(arr1, arr2){
    for(let i=0; i<3; i++){
        const num1 = arr1[i], num2 = arr2[i];
        // console.log(`num1: ${num1}, num2: ${num2}`)
        if((num1===1 && num2===9) || (num1===2 && num2===8) || (num1===9 && num2===1) || (num1===2 && num2===8)){
            continue;
        }
        if(Math.abs(num1-num2)>2){
            return false;
        }
    }
    return true;
}

let ans = 0;

for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        for(let k=1; k<=n; k++){
            // console.log(`i: ${i}, j: ${j}, k: ${k}`)
            if(isValid([i,j,k], [a,b,c]) || isValid([i,j,k], [a2,b2,c2])){
                ans++;
            }
        }
    }
}

console.log(ans);