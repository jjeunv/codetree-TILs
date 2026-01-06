const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const a = input[0];
// Please Write your code here.

const n = a.length;

let ans=0;

for(let i=0; i<n; i++){
    for(let j=i+2; j<n-1; j++){
        if(a[i]==='(' && a[i+1]==='(' && a[j]===')' && a[j+1]===')'){
            ans++
        }
    }
}

console.log(ans)