const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str = input[0];
const len = str.length;

let cnt = 0;

for(let i=0; i<len; i++){
    for(let j=i+2; j<len; j++){
        if(str[i]==='('
        && str[i+1]==='('
        && str[j]===')'
        && str[j+1]===')'){
            cnt++;
        }
    }
}

console.log(cnt);