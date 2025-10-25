const arr = ["apple","banana","grape","blueberry","orange"];

const fs = require("fs");
const char = fs.readFileSync(0).toString().trim();

let cnt =0;

for(let i=0; i<arr.length; i++){
    if(arr[i][2]===char||arr[i][3]===char){
        console.log(arr[i]);
        cnt++;
    }
}

console.log(cnt);