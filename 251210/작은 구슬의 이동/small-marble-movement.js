const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n,t] = input[0].split(' ').map(Number);
const [r,c,d] = input[1].split(' ');

let x = Number(r), y = Number(c);

const dx = [0, 1, -1, 0], dy = [1, 0, 0, -1];

function isValid(x,y){
    return 1<=x && x<=n && 1<=y && y<=n;
}

const mapper = {
    'U':2,
    'D':1,
    'R':0,
    'L':3
};

let dir = mapper[d];

for(let i=0; i<t; i++){
    let nx = x+dx[dir], ny = y+dy[dir];
    if(isValid(nx,ny)){
        x=nx, y=ny;
    }else{
        dir = 3-dir;
    }

}

console.log(x,y)