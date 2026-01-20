const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

let ans = 0;

for(let i=0; i<n; i++){
    for(let j=i+1; j<n; j++){
        for(let k=j+1; k<n; k++){
            const arr = Array(101).fill(0); // 선분 위치
            let isValid = true;
            for(let l=0; l<n; l++){
                if(i===l || j===l || k===l) continue; // i, j, k 제거
                const [a, b] = segments[l];
                for(let m=a; m<=b; m++){
                    arr[m]+=1;
                    if(arr[m]>1){
                        isValid = false;
                        break;
                    }
                }
                if(!isValid){
                    break;
                }
            }
            if(isValid){
                ans++;
            }
        }
    }
}

console.log(ans);