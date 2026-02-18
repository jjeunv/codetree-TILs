const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const num = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const moveDir = input.slice(1 + n, 1 + 2 * n).map(line => line.split(' ').map(Number));
const [r, c] = input[1 + 2 * n].split(' ').map(Number);

const dx = [-1, -1, 0, 1, 1, 1, 0, -1], dy = [0, 1, 1, 1, 0, -1, -1, -1];

function isRange(x,y){
    return 0<=x && x<n && 0<=y && y<n;
}

function canGo(x,y,prevNum){
    return isRange(x,y) && num[x][y]>prevNum;
}
const ans = 0;
function findMax(x, y, cnt){
    ans = Math.max(ans,cnt);

    const d = moveDir[x][y]-1;
    for(let i=0; i<n; i++){
        const nx = x+dx[d]*i, ny = y+dy[d]*i;
        if(canGo(nx, ny, num[x][y])){
            findMax(nx, ny, cnt+1);
        }

    }
}

findMax(r-1, c-1, 0);
console.log(ans);