const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

let ans = 0;

outer: for(let i=0; i<=10; i++){
    for(let j=0; j<=10; j++){
        for(let k=0; k<=10; k++){
            if(i===k || j===k) continue;
            let isValid = true;
            for(let l=0; l<n; l++){
                const [x,y] = points[l];
                if((x!==i && x!==k)&&(y!==j && y!==k)){
                    isValid = false;
                    break;
                } 
            }
            if(isValid){
                ans=1;
                break outer;
            }
        }
    }
}

console.log(ans)