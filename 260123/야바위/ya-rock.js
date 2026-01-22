const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' ').map(Number));

let ans =0;
for(let i=1; i<=3; i++){
    let cnt = 0;
    const arr = Array(4).fill(0);
    arr[i]=1;
    for(let j=0; j<n; j++){
        const [a,b,c] = commands[j];
        const numA = arr[a];
        arr[a] = arr[b];
        arr[b] = numA;
        if(arr[c]===1){
            cnt++;
        }
    }
    ans = Math.max(ans, cnt);
}

console.log(ans);