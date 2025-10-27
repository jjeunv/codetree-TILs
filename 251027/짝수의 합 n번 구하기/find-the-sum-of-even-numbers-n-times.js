const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

for(let i=1; i<=n; i++){
    const nums = input[i].split(" ").map(Number);
    const a = nums[0];
    const b = nums[1];

    let sum =0;
    for(let j=a; j<=b; j++){
        if(j%2===0){
            sum+=j;
        }
    }
    console.log(sum);
}
