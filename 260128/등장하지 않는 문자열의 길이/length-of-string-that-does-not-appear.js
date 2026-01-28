const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const string = input[1];

let ans =0;

for(let i=1; i<=n; i++){
    let isValid = false;
    for(let j=0; j<n-i+1; j++){
        let cur = string.slice(j,j+i);
        // console.log(`i:${i}, j:${j}, cur: ${cur}, indexOf: ${string.indexOf(cur,j+1)}`)
        if(string.indexOf(cur,j+1)!==-1){
            isValid = true;
            break;
        }
    }
    if(!isValid){
        ans = i;
        break;
    }
}

console.log(ans)