const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const str = input[1];

let cnt = 0;

for(let i=0; i<n; i++){
    for(let j=i+1; j<n; j++){
        for(let k=j+1; k<n; k++){
            if(str[i]==='C' && str[j]==='O' && str[k]==='W'){
                cnt++;
            }
        }
    }
}

console.log(cnt);