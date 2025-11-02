const fs= require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let str = input[0];
const cmd = input[1];

for(let i=0; i<cmd.length; i++){
    const c = cmd[i];
    if(c==='L'){
        str = str.slice(1)+str[0];
    }else{
        str = str.slice(-1)+str.slice(0,-1);
    }
}

console.log(str)