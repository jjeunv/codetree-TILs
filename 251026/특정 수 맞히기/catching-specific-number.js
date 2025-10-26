const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let cnt=0;
while(true){
    if(Number(input[cnt]<25)){
        console.log("Higher");
    }else if(Number(input[cnt]>25)){
        console.log("Lower");
    }else{
        console.log("Good");
        break;
    }
    cnt++;
}