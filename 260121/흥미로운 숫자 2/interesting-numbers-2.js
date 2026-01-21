const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(" ").map(Number);

function interesting(number){
    let arr = Array.from(String(number), Number);
    let first = arr[0], second = arr[1];
    let cnt1 = 0, cnt2 = 0;
    for(let i=0; i<arr.length; i++){
        if(first === arr[i]) cnt1++;
        if(second === arr[i]) cnt2++;
    }
    if(first===second && cnt1===arr.length-1){
        return true;
    }
    if(first!==second){
        if((cnt1===1 && cnt2 === arr.length-1) ||
        (cnt1=== arr.length-1 && cnt2===1)){
            return true;
        }
    }
    return false;
}

let ans = 0;
for(let i=x; i<=y; i++){
    if(interesting(i)) ans++;
}

console.log(ans);