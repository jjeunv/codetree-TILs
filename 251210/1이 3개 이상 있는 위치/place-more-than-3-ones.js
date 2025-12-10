const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map((cell)=>cell.split(' ').map(Number));

const dx = [1,0,-1,0], dy = [0,-1,0,1];

function isValid(x,y){
    return 0<=x && x<n && 0<=y && y<n;
}

let ans =0;

for(let x=0; x<n; x++){
    for(let y=0; y<n; y++){
        let cnt =0;
        for(let dir=0; dir<=3; dir++){
            let nextX = x+dx[dir], nextY = y+dy[dir];
            if(isValid(nextX,nextY) && grid[nextX][nextY]===1){
                cnt++;
            }
        }
        if(cnt>=3){
            ans++;
        }
    }
}

console.log(ans)