const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const fir = input[0];
const sec = input[1];

if(fir.length>sec.length){
    console.log(fir, fir.length);
}else if(fir.length<sec.length){
    console.log(sec, sec.length);
}else console.log("same");