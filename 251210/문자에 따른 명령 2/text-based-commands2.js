const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0].split('');

// Please Write your code here.
const dx = [1,0,-1,0], dy = [0,-1,0,1];
let x =0, y=0;
let dir=3;
for(let cmd of commands){
    if(cmd==='L'){
        dir = (dir-1+4)%4;
    }else if(cmd==='R'){
        dir = (dir+1)%4;
    }else{
        x+=dx[dir], y+=dy[dir];
    }
}

console.log(x,y)