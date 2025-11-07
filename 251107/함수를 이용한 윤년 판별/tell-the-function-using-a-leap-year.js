const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const y = Number(input[0]);
// Please Write your code here.

function year(y){
    if(y%100===0 && y%400!==0){
        return false;
    }
    if(y%4!==0) return false;

    return true;

}


if(year(y)){
    console.log('true');
}else{
    console.log('false');
}