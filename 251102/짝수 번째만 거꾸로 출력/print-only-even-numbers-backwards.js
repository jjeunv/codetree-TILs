const fs= require("fs");
const str = fs.readFileSync(0).toString().trim().split("").reverse().join("");

let res = "";
for(let i=0; i<str.length; i++){
    if(i%2===0) res+=str[i];
}

console.log(res)