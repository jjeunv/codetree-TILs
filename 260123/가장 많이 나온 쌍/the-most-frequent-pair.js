const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const pairs = input.slice(1, 1 + m).map(line => line.split(' ').map(Number));

let ans = 0;
for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        let cnt = 0;
        for(let k=0; k<m; k++){
            const [a,b] = pairs[k];
            if((i===a && j===b) || (i===b&&j===a)){
                cnt++;
            }
        }
        ans = Math.max(ans, cnt);
    }
}

console.log(ans);