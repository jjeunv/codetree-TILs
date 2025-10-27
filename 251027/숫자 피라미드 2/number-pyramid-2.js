const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let num=1;

for(let i=1; i<=n; i++){
    let str ="";

    for(let j=0; j<i; j++){
        str+=num+" ";
        num++;
    }
    console.log(str);
}

