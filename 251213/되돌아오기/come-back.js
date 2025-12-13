const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

const moves = input.slice(1).map((move)=>move.split(' '));

const dx = [0,1,0,-1], dy = [1,0,-1,0];
let x=0, y=0;

let time = 1;
let res = -1;


const mapper={
    'E':0,
    'S':1,
    'W':2,
    'N':3,
};

function isValid(x,y){
    return 0<=x && x<n*10 && 0<=y && n<n*10;
}
for(let move of moves){
    let [d,n] = move;
    n = Number(n);
    const dir = mapper[d];
    for(let i =0; i<n; i++){
        let nx = x+dx[dir], ny = y+dy[dir]; 
        if(isValid){
            x = nx, y = ny;
            if(x===0 && y ===0){
                res = time;
            }
            time++;
        }
    }
    
}

console.log(res)