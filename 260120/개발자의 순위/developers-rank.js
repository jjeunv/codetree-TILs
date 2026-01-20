const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);
const arr = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

let ans = 0;

for(let i=1; i<=n; i++){ // a 개발자
    for(let j=1; j<=n; j++){ // b 개발자
        let isValid = true;
        if(i===j) continue;
        for(const game of arr){
            if(game.indexOf(i)>game.indexOf(j)){
                isValid = false;
                break;
            }
        }
        if(isValid){
            ans++;
        }
    }
}

console.log(ans);