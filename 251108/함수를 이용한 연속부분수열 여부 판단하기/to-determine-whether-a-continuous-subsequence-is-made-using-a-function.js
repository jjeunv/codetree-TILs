const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.

function judge(){
    for(let i=0; i<=a.length-b.length; i++){
        if(a[i]===b[0]){
            let flag=1;
            for(let j=1; j<b.length; j++){
                if(a[i+j]!==b[j]){
                    flag=0;
                    break;
                }
            }
            if(flag===0) continue;
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