const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please write your code here.

function count(arr1, arr2){
    // arr1이 정답
    let strike = 0, ball = 0;
    for(let i=0; i<3; i++){
        if(arr1[i]===Number(arr2[i])){
            strike++;
        }else if(arr2.indexOf(arr1[i])!==-1){
            ball++;
        }
    }
    return [strike, ball];
}

let ans = 0;

for(let i=1; i<=9; i++){
    for(let j=1; j<=9; j++){
        for(let k=1; k<=9; k++){
            if(i===j || j===k || i===k) continue;
            let isValid = true;
            for(let l=0; l<n; l++){
                const [num, strike, ball] = arr[l];
                const [s, b] = count([i,j,k], String(num));
                if(strike!==s || ball !==b){
                    isValid = false;
                    break;
                }
            }
            if(isValid){
                ans++;
            }
        }
    }
}


console.log(ans)