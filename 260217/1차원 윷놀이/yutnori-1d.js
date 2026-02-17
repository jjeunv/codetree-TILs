const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

const selected = [];


function calc(){
    const position = Array(k+1).fill(1);
    for(let i=0; i<n; i++){
        position[selected[i]]+=nums[i];
    }

    let sum=0;
    position.forEach((num)=>{
        if(num>=m){
            sum++;
        }
    })
    
    return sum;
}

let ans =0;

function choose(cnt){
    if(cnt===n){
        const res = calc();
        ans = Math.max(ans, res); 
        // console.log(selected, position, res)      
        return;
    }

    for(let i=1; i<=k; i++){
        // if(position[i]>=m){
        //     continue;
        // }
        selected.push(i);
        choose(cnt+1);
        selected.pop();
    }
}

choose(0);
console.log(ans);