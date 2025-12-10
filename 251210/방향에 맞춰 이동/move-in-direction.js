const fs= require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const moves = input.slice(1).map((move)=>move.split(' '));

const dx = [1,0,-1,0];
const dy = [0,-1,0,1];

let x=0, y=0;
for(let move of moves){
    let [d,num]= move;
    num = Number(num);

    let moveDir = 0;
    if(d==='E'){
        moveDir=0;
    }else if(d==='S'){
        moveDir=1;
    }else if(d==='W'){
        moveDir=2;
    }else{
        moveDir=3;
    }
    for(let i=0; i<num; i++){
        x+=dx[moveDir], y+=dy[moveDir];
    }
}

console.log(x,y)