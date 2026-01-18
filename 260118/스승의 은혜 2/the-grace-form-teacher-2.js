const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, b] = input[0].split(' ').map(Number);
const p = input.slice(1, 1 + n).map(Number);

p.sort((a,b)=> a-b);

let ans = 0;

for(let i=0; i<n; i++){
    let cnt=0, cost=0;
    for(let j=0; j<n; j++){
        if(i===j){
            cost+=p[j]/2;
        }else{
            cost+=p[j];
        }
        if(cost<=b){
            cnt++;
        }else{
            break;
        }
    }
    ans = Math.max(ans, cnt)
}

console.log(ans)