const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const a = input[0].split(" ");

let str = a[0];
const n = Number(a[1]);

for(let i=0 ;i<n; i++){
    const q = Number(input[i+1]);
    if(q===1){
        str = str.slice(1)+str[0];
    }else if(q===2){
        str= str.slice(-1)+str.slice(0,-1);
    }else{
        str = str.split("").reverse().join("");
    }
    console.log(str)
}

