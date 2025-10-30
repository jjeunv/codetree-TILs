const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let cnt =0;
for(let i=0; i<4; i++){
    const arr = input[i].split(" ").map(Number);
    for(let j=0; j<4; j++){
        if(arr[j]%5===0) cnt++;
    }
}

console.log(cnt);