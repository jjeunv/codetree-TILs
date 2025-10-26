const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let cnt =0;
while(true){
    if(Number(input[cnt])===0){
        break;
    }
    console.log(input[cnt]);
    cnt++;
}