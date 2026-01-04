const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const mirror = input.slice(1,n+1).map((m)=>m.split(''));
const startNum = Number(input[n+1]);

const startArr = Array(4*n+1).fill(-1);

let cur = 1;
for(let i=0; i<n; i++){
    startArr[cur] = [1, 0, i];
    cur++;
}

for(let i=0; i<n; i++){
    startArr[cur] = [2, i, n-1];
    cur++;
}

for(let i=0; i<n; i++){
    startArr[cur] = [3, n-1, i];
    cur++;
}

for(let i=0; i<n; i++){
    startArr[cur] = [0, i, 0];
    cur++;
}

// console.log(mirror);
// console.log(startArr)

let [curDir, x, y] = startArr[startNum];
// console.log(curDir, x, y)

function isRange(x,y){
    return 0<=x && x<n && 0<=y && y<n;
}

const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];

let ans = 0;

function getNextDir(curDir, x, y){
    const c = mirror[x][y];
    if(c==='/'){
        if(curDir === 0){
            return 3;
        }else if(curDir === 1){
            return 2;
        }else if(curDir===2){
            return 1;
        }else if(curDir===3){
            return 0;
        }
    }else if(c==='\\'){
        if(curDir===0){
            return 1;
        }else if(curDir===1){
            return 0;
        }else if(curDir===2){
            return 3;
        }else if(curDir===3){
            return 2;
        }
    }

}
while(isRange(x,y)){
    const nextDir = getNextDir(curDir, x, y);    
    // console.log(`curDir: ${curDir}, nextDir: ${nextDir}, x: ${x}, y: ${y}`)
    ans++;
    x += dx[nextDir], y += dy[nextDir];
    curDir = nextDir;
    // console.log(`x: ${x}, y: ${y}`)
}

console.log(ans)