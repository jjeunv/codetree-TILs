const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, t] = input[0].split(' ').map(Number);
const commands = input[1].split('');
const grid = input.slice(2).map((nums)=>nums.split(' ').map(Number));

const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];

function isRange(x, y){
    return 0<=x && x<n && 0<=y && y<n;
}

function getDir(cmd, dir){
    if(cmd==='R'){
        return (dir+1)%4;
    }else{
        return (dir-1+4)%4;
    }
}


const center = (n-1)/2;
let [x, y, dir] = [center, center, 3];

let ans = grid[x][y];

for(let cmd of commands){

    if(cmd === 'F'){
        const nx = x+dx[dir], ny = y+dy[dir];
        if(isRange(nx, ny)){
            x=nx, y=ny;
            ans+=grid[x][y];
        }
    }else{
        dir = getDir(cmd, dir);
    }
}

console.log(ans)