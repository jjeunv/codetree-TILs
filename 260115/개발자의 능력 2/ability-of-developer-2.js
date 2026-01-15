const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[0].split(" ").map(Number);

// Please Write your code here.
let sum = 0;
arr.forEach((num)=>{
    sum+=num;
})

let ans = Number.MAX_SAFE_INTEGER;
for(let i=0; i<6; i++){
    for(let j=0; j<6; j++){
        for(let k=0; k<6; k++){
            for(let l=0; l<6; l++){
                if(i===j||i===k||i===l||j===k||j===l||k===l) continue;
                const team1 = arr[i]+arr[j];
                const team2 = arr[k]+arr[l];
                const team3 = sum-(arr[i]+ arr[j] + arr[k] + arr[l]);
                const sub = Math.max(team1,team2,team3)- Math.min(team1, team2, team3); 
                ans = Math.min(ans,sub);
                // console.log(`${arr[i]},${arr[j]}/ ${arr[k]},${arr[l]}/ total: ${sum}, team1: ${team1}, team2: ${team2}, team3: ${team3}, sub: ${sub}`)
            }
        }
    }
}

console.log(ans)