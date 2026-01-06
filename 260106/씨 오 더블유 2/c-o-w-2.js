const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const s = input[1];

// Please Write your code here.
let ans = 0;

for(let i=0; i<n; i++){
    for(let j=i+1; j<n; j++){
        for(let k=j+1; k<n; k++){
            if(s[i]==='C' && s[j]==='O' && s[k]==='W'){
                ans++;
            }
        }
    }
}

console.log(ans)