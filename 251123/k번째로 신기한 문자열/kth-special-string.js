const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let index = 0;
const [n, k, t] = input[index++].split(' ');
const words = [];
for (let i = 0; i < Number(n); i++) {
    words.push(input[index++]);
}
// Please Write your code here.

function startStr(a,b){

    for(let i=0; i<b.length; i++){
        if(a[i]!==b[i]) return false;
    }
    return true;
}



const res = [];
for(let i=0; i<n; i++){
    if(startStr(words[i],t)){
        res.push(words[i]);
    }
}


console.log(res.sort()[k-1]);