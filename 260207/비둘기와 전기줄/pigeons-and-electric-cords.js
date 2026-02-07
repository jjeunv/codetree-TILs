const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const movements = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

const arr = Array(11).fill(-1);

let ans = 0;

for(let i=0; i<n; i++){
    const [num, pos] = movements[i];
    if(arr[num]===-1){
        arr[num]= pos;
    }else if(arr[num]!== pos){
        ans+=1;
        arr[num]= pos;
    }
}

console.log(ans);