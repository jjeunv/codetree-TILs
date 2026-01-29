const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const hills = [];

for (let i = 1; i <= n; i++) {
    hills.push(Number(input[i]));
}

let ans = Number.MAX_SAFE_INTEGER;

for(let i=0; i<n; i++){
    const h = hills[i];

    // h가 제일 높은 언덕일 때
    let cost = 0;
    for(let j=0; j<n; j++){
        if(i===j) continue;
        let curH = hills[j];
        const minH = h-17<=0 ? 0 : h-17;
        // h보다 높은 언덕일 때
        if(curH>h){
            cost += Math.pow(curH-h,2);
        }else if(curH<minH){ // minH보다 낮은 언덕일 때
            cost += Math.pow(minH-curH,2);
        }
    }
    ans = Math.min(ans, cost);
    
    // h가 제일 낮은 언덕일 때
    cost = 0;
    for(let j=0; j<n; j++){
        if(i===j) continue;
        let curH = hills[j];
        const maxH = h+17;
        // maxH보다 높은 언덕일 때
        if(curH>maxH){
            cost+= Math.pow(curH-maxH,2);
        }else if(curH<h){// h보다 낮은 언덕일 때
            cost+=Math.pow(h-curH,2);
        }
    }
    ans = Math.min(ans, cost);

}

console.log(ans)