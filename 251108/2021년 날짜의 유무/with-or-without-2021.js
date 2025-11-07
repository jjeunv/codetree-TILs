const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

// Please Write your code here.

function judge(m){
    if(m===2){
        return 28;
    }
    if(m===4||m===6||m===9||m===11){
        return 30;
    }
    return 31;
}

if(m>12){
    console.log('No');
}else if(judge(m)>=d){
    console.log('Yes');
}else{
    console.log('No');
}