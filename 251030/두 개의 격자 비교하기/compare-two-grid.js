const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const nums = input[0].split(" ").map(Number);

const n = nums[0];
const m = nums[1];

let arr1 = Array(n).fill(0).map(()=>Array(m).fill(0));
let arr2 = Array(n).fill(0).map(()=>Array(m).fill(0));

for(let i=1; i<n+1; i++){
    arr1[i-1]=input[i].split(" ").map(Number);
}

for(let i=1+n; i<2*n+1; i++){
    arr2[i-(n+1)]=input[i].split(" ").map(Number);
}

let res = Array(n).fill(0).map(()=>Array(m).fill(0));
for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
        res[i][j] = arr1[i][j] === arr2[i][j] ? 0 : 1;
    }
}

for(row of res){
    let str="";
    for(elm of row){
        str+=elm+" ";
    }
    console.log(str);
}