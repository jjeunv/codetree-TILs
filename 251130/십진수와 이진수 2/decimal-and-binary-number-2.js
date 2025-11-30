const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0].split('').map(Number);

// Please Write your code here. 

function getDecimal(){
    let num=0;
    for(let i=0; i<binaryInput.length; i++){
        num= num*2+binaryInput[i];
    }
    return num;
}

function getBinary(n){
    let arr = [];
    while(true){
        if(n<2){
            arr.push(n);
            break;
        }
        arr.push(n%2);
        n=Math.floor(n/2);
    }
    return arr.reverse().join("");
}

console.log(getBinary(getDecimal()*17))