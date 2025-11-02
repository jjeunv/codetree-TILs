const fs= require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const a = input[0];
const b = input[1];

let cnt=0;
for(let i=0; i<a.length-1; i++){
    if(a.slice(i,i+2)===b){
        cnt++;
    }
}

console.log(cnt)