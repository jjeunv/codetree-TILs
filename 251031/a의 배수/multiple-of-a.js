const fs= require("fs");
const [n,a] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let idx = 1;
while(idx<=n){
    console.log(idx%a===0?1:0);
    idx++
}