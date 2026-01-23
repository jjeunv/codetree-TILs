const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const string = input[1];

let ans =0;
outer: for(let i=1; i<n; i++){
    for(let j=0; j<n-i+1; j++){
        let cur = string.slice(j,j+i);
        // console.log(`i:${i}, j:${j}, cur: ${cur}, indexOf: ${string.indexOf(cur,2)}`)
        if(string.indexOf(cur,2)!==-1){
            break;
        }
        ans = i;
        break outer;
    }
}

console.log(ans)