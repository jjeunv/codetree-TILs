const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.

function judge(){
    if(a.length!==1 && b.length===1){
        return false;
    }
    for(let i=0; i<=a.length-b.length; i++){
        if(a[i]===b[0]){
            for(let j=1; j<b.length; j++){
                if(a[i+j]!==b[j]){
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}


if(judge()){
    console.log('Yes');
}else{
    console.log('No');
}