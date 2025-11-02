const fs= require("fs");

let string = fs.readFileSync(0).toString().trim();

const a = string[0];
const b = string[1];

for(let i=0; i<string.length; i++){
    if(string[i]===b){
        string= string.slice(0,i)+a+string.slice(i+1);
    }
}

console.log(string)
