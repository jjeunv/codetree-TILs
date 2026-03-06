class Queue{
    constructor(){
        this.q = [];
        this.head = -1;
        this.tail = -1;
    }

    push(item){
        this.q.push(item);
        this.tail++;
    }

    empty(){
        return (this.head===this.tail);
    }

    size(){
        return (this.tail-this.head);
    }

    pop(){
        if(this.empty()){
            throw new Error("Queue is empty");
        }
        return this.q[++this.head];
    }

    front(){
        if(this.empty()){
            throw new Error("Queue is empty");
        }
        return this.q[this.head+1];
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const visited = Array.from({length:n}, ()=>Array(m).fill(false));
const q = new Queue();

function isRange(x,y){
    return 0<=x && x<n && 0<=y && y<m;
}

function canGo(x,y){
    if(!isRange(x,y)) return false;

    if(visited[x][y] || grid[x][y]===0) return false;

    return true;
}

function bfs(){
    while(!q.empty()){
        const [x, y] = q.pop();

        const dx = [0,-1,0,1], dy=[1,0,-1,0];
        for(let i=0; i<4; i++){
            const nx = x+dx[i], ny = y+dy[i];
            if(canGo(nx,ny)){
                q.push([nx, ny]);
                visited[nx][ny] = true;
            }
        }
    } 
}

q.push([0,0]);
visited[0][0] = true;
bfs();

console.log(visited[n-1][m-1]?1:0)