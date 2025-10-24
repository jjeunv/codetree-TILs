const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

for(let i=0; i<8; i++){
 arr.push((arr[i]+arr[i+1])%10);
}

console.log(arr.join(" "));