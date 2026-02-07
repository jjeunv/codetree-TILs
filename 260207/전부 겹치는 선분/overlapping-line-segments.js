const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

const arr = Array(101).fill(0);

segments.forEach(([a,b])=>{
    for(let i=a; i<=b; i++){
        arr[i]+=1;
    }
})

let flag = false;
for(let num of arr){
    if(num===n){
        flag = true;
        break;
    }
}
console.log(flag?"Yes":"No");