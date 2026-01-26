const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seat = input[1].split('').map(Number);

let ans =0;

for(let i=0; i<n; i++){
    if(seat[i]===1) continue;
    seat[i]=1;
    for(let j=i+1; j<n; j++){
        if(seat[j]===1) continue;
        seat[j]=1;

        let cnt=Number.MAX_SAFE_INTEGER;
        for(let k=0; k<n; k++){
            for(let l=k+1; l<n; l++){
                if(seat[k]===1 && seat[l]===1){
                    cnt = Math.min(cnt, l-k);
                }
            }
        }
        ans = Math.max(ans, cnt);
        
        seat[j]=0
    }
    seat[i]=0;
}

console.log(ans);
