const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n\n");

const arr1 = input[0].split("\n");
const arr2 = input[1].split("\n");


for(let i=0; i<3; i++){
    let str="";
    const row1 = arr1[i].split(" ").map(Number);
    const row2 = arr2[i].split(" ").map(Number);
    for(let j=0; j<3; j++){
        str+=row1[j]*row2[j]+" ";
    }
    console.log(str);
}