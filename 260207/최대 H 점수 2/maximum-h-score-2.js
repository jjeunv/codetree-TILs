const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, l] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);

numbers.sort((a,b)=>b-a);
// 100 3 2 1

let ans = 0;
for(let i=0; i<=101; i++){
    let cnt = 0;
    let plus = l;
    for(let j=0; j<n; j++){
        if(numbers[j]>=i){
            cnt+=1;
        }else if(numbers[j]+1>=i && plus>0){
            plus-=1;
            cnt+=1;
        }
    }
    if(cnt>=i){
        ans = Math.max(ans, i);
    }
}

console.log(ans);