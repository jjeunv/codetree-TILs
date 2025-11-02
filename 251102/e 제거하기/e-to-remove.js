const fs = require("fs");
let str = fs.readFileSync(0).toString().trim();

const idx = str.indexOf('e');

if(idx===0){
    str = str.slice(1);
}else{
    str= str.slice(0,idx)+str.slice(idx+1);
}

console.log(str)