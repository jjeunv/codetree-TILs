const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1).map((a)=>a.split(' '));

const people = Array(101).fill(0);
for(let [pos, c] of arr){
    people[pos] = c;
}

let ans = 0;
for(let i=0; i<101; i++){
    if(people[i]===0) continue;
    for(let j=i; j<101; j++){
        if(people[j]===0){
            continue;
        }
        let [g, h] = [0, 0];
        for(let k=i; k<=j; k++){
            if(people[k]==='G'){
                g++;
            }else if(people[k]==='H'){
                h++;
            }
        }
        if(g===0 || h===0 || g===h){
            ans = Math.max(ans, Math.abs(j-i));
        }

    }
}

console.log(ans)