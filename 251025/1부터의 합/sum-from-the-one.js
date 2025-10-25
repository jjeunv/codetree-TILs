const fs = require("fs");

const n = Number(fs.readFileSync(0).toString().trim());

let res = 0;

for(let i=1; i<=100; i++){
    res+=i;
    if(res>=n){
        console.log(i);
        break;
    }
}

