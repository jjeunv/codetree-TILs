const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

const arr = Array.from({length:n}, ()=>Array(n).fill(0))
let bomb = [];
let ans = 0;
const dx = [0,1,1,1,0,-1,-1,-1], dy = [1,1,0,-1,-1,-1,0,1];

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        if(grid[i][j]===1){
            bomb.push([i,j]);
        }
    }
}

function isValid(x,y){
    return 0<=x && x<n && 0<=y && y<n;
}

function bombed(currNum, num){
    const [x, y] = bomb[currNum-1];
    if(num===1){
        for(let i=0; i<n; i++){
            if(arr[i][y]===0){
                arr[i][y]= currNum;
            }
        }
    }else if(num===2){
        let dir=0;
        for(let i=0; i<4; i++){
            const nextX = x+dx[dir], nextY = y+dy[dir];
            if(isValid(nextX, nextY)&& arr[nextX][nextY]===0){
                arr[nextX][nextY]= currNum;
            }
            dir+=2;
        }
        if(arr[x][y]===0){
            arr[x][y]=currNum;
        }        
        
    }else if(num===3){
        let dir = 1;
        for(let i=0; i<4; i++){
            const nextX = x+dx[dir], nextY = y+dy[dir];
            if(isValid(nextX, nextY)&& arr[nextX][nextY]===0){
                arr[nextX][nextY]= currNum;
            }
            dir+=2;
        }
        if(arr[x][y]===0){
            arr[x][y]=currNum;
        }   
    }
}

function reset(currNum, num){
    const [x, y] = bomb[currNum-1];
    if(num===1){
        for(let i=0; i<n; i++){
            if(arr[i][y]===currNum){
                arr[i][y]=0;
            }
        }
    }else if(num===2){
        let dir = 0;
        for(let i=0; i<4; i++){
            const nextX = x+dx[dir], nextY = y+dy[dir];
            if(isValid(nextX, nextY)&& arr[nextX][nextY]===currNum){
                arr[nextX][nextY]= 0;
            }
            dir+=2;
        }
        if(arr[x][y]===currNum){
            arr[x][y]=0;
        }
    }else if(num===3){
        let dir = 1;
        for(let i=0; i<4; i++){
            const nextX = x+dx[dir], nextY = y+dy[dir];
            if(isValid(nextX, nextY)&& arr[nextX][nextY]===currNum){
                arr[nextX][nextY]= 0;
            }
            dir+=2
        }
        if(arr[x][y]===currNum){
            arr[x][y]=0;
        }
    }
}

function count(){
    let cnt = 0;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(arr[i][j]!==0){
                cnt+=1;
            }
        }
    }
    ans = Math.max(ans, cnt);
}

function choose(currNum){
    if(currNum===bomb.length+1){
        count();
        return;
    }

    for(let i=1; i<=3; i++){
        bombed(currNum, i);
        // console.log('bomb')
        //         for(let i=0; i<n; i++){
        //     console.log(arr[i].join(' '))
        // }
        // console.log()
        choose(currNum+1);
        reset(currNum, i);
        //         console.log('reset')
        // for(let i=0; i<n; i++){
        //     console.log(arr[i].join(' '))
        // }
        // console.log()
    }
}

choose(1);

console.log(ans);