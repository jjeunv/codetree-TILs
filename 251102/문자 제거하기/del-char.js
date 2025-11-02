const fs= require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let str = input[0];

let idx = 1;
while(str.length!==1){
    const n = Number(input[idx]);
    idx++;

    if(str.length<=n){
        str = str.slice(0,str.length-1);
    }else if(n===0){
        str = str.slice(1);
    }else{
        str = str.slice(0,n)+str.slice(n+1);
    }
    console.log(str)
}