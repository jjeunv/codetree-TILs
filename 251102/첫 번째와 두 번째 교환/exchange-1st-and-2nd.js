const fs= require("fs");
const str = fs.readFileSync(0).toString().trim();

const a = str[0];
const b=  str[1];
let res = "";

for(let i=0; i<str.length; i++){
    if(str[i]===a){
        res+=b;
    }else if(str[i]===b){
        res+=a;
    }else{
        res+=str[i]
    }
}

console.log(res)