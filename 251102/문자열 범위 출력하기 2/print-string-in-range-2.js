const fs =require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[1]);
const str = input[0].split("").reverse().join("");
if(n>str.length){
    console.log(str);
}else{
    let s = "";
    for(let i=0; i<n; i++){
        s+=str[i];
    }
    console.log(s)
}