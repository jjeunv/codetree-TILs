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
for(let i=1; i<100-2*k; i++){
    let cnt = 0;
    for(let j=i; j<=i+2*k; j++){
        cnt+=arr[j];
    }
    ans = Math.max(ans,cnt)
}

console.log(ans)