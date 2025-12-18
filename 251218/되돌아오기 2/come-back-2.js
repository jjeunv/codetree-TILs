const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];
// Please Write your code here.

const dx = [0,1,0,-1], dy=[1,0,-1,0];

let x = 0, y =0;
let dir = 3;
let t =0;

function solve(){
for(let i=0; i<commands.length; i++){
    const c = commands[i];
    if(c==='L'){
        dir = (dir-1+4)%4;
    }
    else if(c==='R'){
        dir = (dir+1)%4;
    }else if(c==='F'){
        x+=dx[dir], y+=dy[dir];
    }
    t++;
    if(x===0 && y===0){
        return t;
    }
}
return -1
}


console.log(solve())

