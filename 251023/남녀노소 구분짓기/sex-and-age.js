const fs= require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const num = Number(input[0]);
const age = Number(input[1]);

if(num===0){
    if(age>=19){
        console.log("MAN");
    }
    else console.log("BOY");
}else{
    if(age>=19){
        console.log("WOMAN");
    }
    else{
        console.log("GIRL");
    }
}