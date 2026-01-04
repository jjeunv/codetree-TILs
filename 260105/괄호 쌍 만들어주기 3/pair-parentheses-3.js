const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];

// Please Write your code here.

let ans = 0;
for(let i=0; i<A.length-1; i++){
    for(let j=i+1; j<A.length; j++ ){
        if(A[i]==='(' && A[j]===')'){
            ans++;
        }
    }
}

console.log(ans)