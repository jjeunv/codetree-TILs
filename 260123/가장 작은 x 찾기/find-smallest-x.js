const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const conditions = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

for(let i=1; i<=5000; i++){
    let num = i;
    let isValid = true;
    for(let j=0; j<n; j++){
        num*=2;
        const [a,b] = conditions[j];
        if(a>num || b<num){
            isValid = false;
            break;
        }
    }
    if(isValid){
        console.log(i);
        break;
    }
}