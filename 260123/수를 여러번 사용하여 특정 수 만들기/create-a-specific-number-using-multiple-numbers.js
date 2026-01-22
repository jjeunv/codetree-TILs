const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b, c] = input[0].split(' ').map(Number);

let ans =0;

for(let i=0; i<=1000; i++){
    for(let j=0; j<=1000; j++){
        let sum = a*i + b*j;
        if(sum<=c){
            ans = Math.max(ans, sum);
        }
    }
}

console.log(ans);