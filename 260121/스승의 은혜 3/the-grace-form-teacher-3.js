const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, b] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((s)=>s.split(' ').map(Number));

arr.sort((a,b)=>{
    return (a[0]/2+a[1])-(b[0]/2+b[1]);
})

let ans = 0;

for(let i=0; i<n; i++){
    let cost = 0;
    let cnt = 0;
    for(let j=0; j<n; j++){
        if(i===j){
            cost+=(arr[j][0]/2 + arr[j][1]);
        }else{
            cost+=(arr[j][0]+arr[j][1]);
        }
        if(cost<=b){
            cnt++;
        }else{
            break;
        }
    }
    ans = Math.max(ans, cnt);
}

console.log(ans);
