class Queue {
    constructor() {
        this.q = [];
        this.head = -1;
        this.tail = -1;
    }

    push(item) {
        this.q.push(item);
        this.tail++;
    }

    empty() {
        return this.head === this.tail;
    }

    size() {
        return this.tail - this.head;
    }

    front() {
        if (this.empty()) {
            throw new Error("queue is empty");
        }
        return this.q[this.head + 1];
    }

    pop() {
        if (this.empty()) {
            throw new Error("queue is empty");
        }
        return this.q[++this.head];
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const grid = input.slice(1).map((line) => line.trim().split(' ').map(Number));
const queue = new Queue();
const visited = Array.from({ length: n }, () => Array(m).fill(-1));
const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];


function canGo(x, y) {
    return 0 <= x && x < n && 0 <= y && y < m && visited[x][y] === -1 && grid[x][y];
}

function bfs() {

    while (!queue.empty()) {
        const [x, y, d] = queue.pop();

        for (let dir = 0; dir < 4; dir++) {
            const [nx, ny] = [x + dx[dir], y + dy[dir]];
            if (canGo(nx, ny)) {
                visited[nx][ny] = d + 1;
                queue.push([nx, ny, d + 1]);
            }
        }
    }
}

visited[0][0] = 0;
queue.push([0, 0, 0]);
bfs();

console.log(visited[n - 1][m - 1]);