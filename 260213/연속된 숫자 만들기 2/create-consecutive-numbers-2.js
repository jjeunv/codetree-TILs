const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].split(" ").map(Number);

arr.sort((a,b)=>a-b)
let ans;
if(arr[0]+1 === arr[1] && arr[1]+1 === arr[2]){
    ans = 0;
}else if(arr[0]+2===arr[1]|| arr[1]+2===arr[2]){
    ans = 1;
}else{
    ans = 2;
}
console.log(ans)