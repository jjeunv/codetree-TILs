const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const str = input[1].split(" ").join("");

let s = "";
for(let i=1; i<=str.length; i++){
    s+=str[i-1];
    if(i%5===0){
        console.log(s);
        s="";
    }
}

if(str.length%5!==0){
    console.log(s)
}