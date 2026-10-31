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
            throw new Error("Queue is empty");
        }
        return this.q[this.head + 1];
    }

    pop() {
        if (this.empty()) {
            throw new Error("Queue is empty");
        }

        return this.q[++this.head];
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const grid = input.slice(1).map((line) => line.trim().split(' ').map(Number));
const visited = Array.from({ length: n }, () => Array(m).fill(0));
const queue = new Queue();

function canGo(x, y) {
    return 0 <= x && x < n && 0 <= y && y < m && !visited[x][y] && grid[x][y];
}

function bfs() {
    while (!queue.empty()) {
        const [x, y] = queue.pop();

        const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
        for (let dir = 0; dir < 4; dir++) {
            const [nx, ny] = [x + dx[dir], y + dy[dir]];

            if (canGo(nx, ny)) {
                visited[nx][ny] = 1;
                queue.push([nx, ny]);
            }
        }
    }
}

visited[0][0] = 1;
queue.push([0, 0]);
bfs();

console.log(visited[n - 1][m - 1]);