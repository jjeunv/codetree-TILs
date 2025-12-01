const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.

let arr = new Array(2001).fill(0);

let idx = 1000;

for(let cmd of commands){
    let [num, dir] = cmd.split(" ");
    num=Number(num);
    if(dir==='R'){
        while(num--){
            idx++;
            arr[idx]+=1;
        }
    }else{
        while(num--){
            idx--;
            arr[idx]+=1;
        }
    }
}

let cnt=0;
for(let c of arr){
    if(c>=2) cnt++;
}

console.log(cnt)