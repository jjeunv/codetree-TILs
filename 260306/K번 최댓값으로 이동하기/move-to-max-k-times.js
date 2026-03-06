class Queue{
    constructor(){
        this.q = [];
        this.head = -1;
        this.tail = -1;
    }

    empty(){
        return this.head===this.tail;
    }

    size(){
        return this.tail-this.head;
    }

    push(item){
        this.q.push(item);
        this.tail++;
    }

    front(){
        if(this.empty()){
            throw new Error('Queue is empty');
        }
        return this.q[this.head+1];
    }

    pop(){
        if(this.empty()){
            throw new Error('Queue is empty');
        }
        return this.q[++this.head];
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, k] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const [r, c] = input[1 + n].split(' ').map(Number);
const visited = Array.from({length:n}, ()=>Array(n).fill(false));
const q = new Queue();

let currCell = [r-1, c-1];

function isRange(x,y){
    return 0<=x && x<n && 0<=y && y<n;
}

function canGo(x,y,targetNum){
    return isRange(x,y) && !visited[x][y] && grid[x][y]<targetNum;
}

const initializeVisited = ()=>{
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            visited[i][j] = false;
        }
    }
}

function bfs(){
    const dx = [0, 1, 0, -1], dy = [1,0,-1,0];

    let [currX, currY] = currCell;
    visited[currX][currY] = true;
    q.push(currCell);

    const targetNum = grid[currX][currY];

    while(!q.empty()){
        [currX, currY] = q.pop();
        
        for(let dir=0; dir<dx.length; dir++){
            const nx =currX+dx[dir], ny=currY+dy[dir];

            if(canGo(nx,ny,targetNum)){
                q.push([nx,ny]);
                visited[nx][ny] = true;
            }
        }
    }
}

function needUpdate(bestPos, newPos){
    if(bestPos[0]===-1 && bestPos[1]===-1){
        return true;
    }

    const [bestX, bestY] = bestPos;
    const [newX, newY] = newPos;

    if(grid[bestX][bestY] !== grid[newX][newY]){
        return grid[newX][newY]>grid[bestX][bestY];
    }
    if(newX === bestX){
        return newY<bestY;
    }
    return newX<newY;
}
function move(){
    initializeVisited();
    
    bfs(); // 갈 수 있는 위치들 탐색

    let bestPos = [-1,-1];
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(!visited[i][j] || (i===currCell[0] && j===currCell[1])){
                continue;
            }

            const newPos = [i,j];
            if(needUpdate(bestPos, newPos)){
                bestPos = newPos;
            }
        }
    }

}
for(let i=0; i<k; i++){
    const isMoved = move();

    if(!isMoved){
        break;
    }
}


const [finalX, finalY] = currCell;
console.log(finalX + 1, finalY + 1);