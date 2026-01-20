const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, b] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((s)=>s.split(' ').map(Number));

let ans = 0;

for(let i=0; i<n; i++){
    let cost = 0;
    let cnt = 0;
    const current = arr.map(v=>[...v]);
    current[i][0]/=2;
    current.sort((a,b)=>{
        return (a[0]+a[1])-(b[0]+b[1]);
    })
    for(let j=0; j<n; j++){
        cost+=(current[j][0]+current[j][1]);
        if(cost<=b){
            cnt++;
        }else{
            break;
        }
    }
    ans = Math.max(ans, cnt);
}

console.log(ans);
