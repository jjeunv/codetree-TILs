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
            throw new Error("q is empty");
        }
        return this.q[this.head + 1];
    }

    pop() {
        if (this.empty()) {
            throw new Error("q is empty");
        }
        return this.q[++this.head];
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].trim().split(' ').map(Number);
const grid = input.slice(1, 1 + n).map((line) => line.trim().split(' ').map(Number));
const starts = input.slice(1 + n).map((line) => line.trim().split(' ').map((val) => val - 1));
const queue = new Queue();
const visited = Array.from({ length: n }, () => Array(n).fill(false));

let cnt = 0;

function canGo(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n && !visited[x][y] && !grid[x][y];
}

function bfs() {
    while (!queue.empty()) {
        const [x, y] = queue.pop();

        const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
        for (let dir = 0; dir < 4; dir++) {
            const [nx, ny] = [x + dx[dir], y + dy[dir]];
            if (canGo(nx, ny)) {
                cnt++;
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                bfs(nx, ny);
            }
        }
    }
}

for (let i = 0; i < k; i++) {
    const [r, c] = starts[i];
    if (visited[r][c]) continue;

    visited[r][c] = true;
    cnt++;
    queue.push([r, c]);
    bfs();
}

console.log(cnt);