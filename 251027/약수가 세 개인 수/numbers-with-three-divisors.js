const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const start = input[0];
const end = input[1];

let ans=0;
for(let i=start; i<=end; i++){
    let cnt =2;
    for(let j=2; j<i; j++){
        if(i%j===0) cnt++;
    }
    if(cnt===3){
        ans++;
    }
}

console.log(ans);