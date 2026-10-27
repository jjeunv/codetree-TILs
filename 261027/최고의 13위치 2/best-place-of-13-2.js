const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map((line)=>line.trim().split(' ').map(Number));

let maxCnt = 0;

for(let i=0; i<n; i++){
    for(let j=0; j<n-2; j++){

        for(let k=i; k<n; k++){
            if(i==k){
                for(let l=j+3; l<n-2; l++){
                    maxCnt = Math.max(maxCnt, arr[i][j]+arr[i][j+1]+arr[i][j+2] + arr[k][l]+arr[k][l+1]+arr[k][l+2]);
                }
            }else{
                for(let l=0; l<n-2; l++){
                    maxCnt = Math.max(maxCnt, arr[i][j]+arr[i][j+1]+arr[i][j+2] + arr[k][l]+arr[k][l+1]+arr[k][l+2]);
                }
            }
        }
    }
}

console.log(maxCnt);