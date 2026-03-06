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

function getPosition(num){
    let maxNum = 0;
    let [x,y] = [-1,-1];
    for(let i=n-1; i>=0; i--){
        for(let j=n-1; j>=0; j--){
            if(!visited[i][j] && grid[i][j]<num){
                if(maxNum<=grid[i][j]){
                    maxNum = grid[i][j];
                    [x,y]= [i,j];
                }
            }
        }
    }

    return [x,y];
}

function bfs(){
    while(!q.empty()){
        if(k===0) break;
        const [x,y] = q.pop();
        const [nx,ny] = getPosition(grid[x][y]);
        if(nx!==-1 && ny!==-1){
            q.push([nx,ny]);
            ansX = nx, ansY = ny;
            k--;
            visited[nx][ny] = true;
        }
    }
}

let [ansX,ansY] = [r-1,c-1];
q.push([ansX, ansY]);
bfs();

console.log(ansX, ansY)