const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

let ans = Number.MAX_SAFE_INTEGER;

for(let i=1; i<=100; i++){
    for(let j=1; j<=100; j++){
        let [a,b,c,d] = [0, 0, 0, 0];
        points.forEach(([x,y])=>{
            if(x<i){
                if(y<j){
                    a++;
                }else{
                    b++;
                }
            }else{
                if(y<j){
                    c++;
                }else{
                    d++;
                }
            }
        })
        ans = Math.min(ans, Math.max(a,b,c,d));
    }
}

console.log(ans);