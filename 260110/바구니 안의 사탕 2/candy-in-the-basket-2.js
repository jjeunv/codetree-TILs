const fs= require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n,k] = input[0].split(' ').map(Number);
const candy = input.slice(1).map((c)=>c.split(' ').map(Number));

const arr = Array(101).fill(0);
for(let c of candy){
    const [cnt, pos] = c;
    arr[pos] = cnt;
}

let ans = 0;
for(let i=1; i<101; i++){
    let sum = 0;
    for(let j=i-k; j<=i+k; j++){
        if(0<=j && j<101){
            sum+=arr[j];
        }
    }
    ans = Math.max(ans, sum)
}

console.log(ans)