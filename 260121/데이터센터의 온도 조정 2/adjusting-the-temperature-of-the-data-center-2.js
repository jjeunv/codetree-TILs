const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, c, g, h] = input[0].split(' ').map(Number);
const temp = input.slice(1).map((t)=>t.split(' ').map(Number));

let ans = 0;

for(let i=0; i<=1000; i++){ // 현재 온도
    let cnt = 0; // 작업량

    for(let j=0; j<n; j++){ // 현재 장비 
        let [t1, t2] = temp[j]; // 선호 온도
        if(i<t1){
            cnt+=c;
        }else if(t1<=i && i<=t2){
            cnt+=g;
        }else{
            cnt+=h;
        }
    }

    ans = Math.max(ans, cnt);
}

console.log(ans);