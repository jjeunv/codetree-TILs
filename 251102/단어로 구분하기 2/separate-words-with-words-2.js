const fs =require("fs");
const input = fs.readFileSync(0).toString().split(" ");

let str= "";
for(let i=0; i<input.length; i++){
    if(i%2===0) str+=(input[i]+"\n");
}
console.log(str)