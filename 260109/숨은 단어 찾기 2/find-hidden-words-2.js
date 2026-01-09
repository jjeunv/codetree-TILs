const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1, n + 1);
// Please Write your code here.

function isLEE(arr){
    return arr[0]==='L' && arr[1]==='E' && arr[2]==='E';
}

function isRange(x, y){
    return 0<=x && x<n && 0<=y && y<m;
}

const dx = [0, -1, -1, -1, 0, 1, 1, 1], dy = [1, 1, 0, -1, -1, -1, 0, 1];

let ans = 0;

for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
        if(arr[i][j]!=='L'){
            continue;
        }

        for(let dir=0; dir<dx.length; dir++){
            let nx = i+dx[dir], ny = j+dy[dir];
            if(isRange(nx, ny) && arr[nx][ny]==='E'){
                nx+=dx[dir], ny+=dy[dir];
                if(isRange(nx,ny) && arr[nx][ny]==='E'){
                    ans++;
                }
            }

        }
    }
}

console.log(ans)