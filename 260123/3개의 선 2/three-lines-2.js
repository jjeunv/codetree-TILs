const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

let ans = 0;

outer: for(let i=0; i<=10; i++){
    for(let j=0; j<=10; j++){
        for(let k=0; k<=10; k++){
            let success = true;

            points.forEach(([x,y])=>{
                if(x===i || x===j || x===k){
                    return;
                }
                success = false;
            })
            if(success){
                ans = 1;
                break outer;
            }

            success = true;
            points.forEach(([x,y])=>{
                if(x===i || x===j || y===k){
                    return;
                }
                success = false;
            })
            if(success){
                ans = 1;
                break outer;
            }

            success = true;
            points.forEach(([x,y])=>{
                if(x===i || y===j || y===k){
                    return;
                }
                success = false;
            })
            if(success){
                ans = 1;
                break outer;
            }

            success = true;
            points.forEach(([x,y])=>{
                if(y===i || y===j || y===k){
                    return;
                }
                success = false;
            })
            if(success){
                ans = 1;
                break outer;
            }
        }
    }
}

console.log(ans);