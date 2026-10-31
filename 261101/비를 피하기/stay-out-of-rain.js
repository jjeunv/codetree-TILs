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

    pop() {
        if (this.empty()) {
            throw new Error("queue is empty");
        }
        return this.q[++this.head];
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, h, m] = input[0].trim().split(' ').map(Number);
const grid = input.slice(1).map((line) => line.trim().split(' ').map(Number));
let queue = new Queue();
const visited = Array.from({ length: n }, () => Array(n).fill(-1));
const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
const avoidPos = [];
const personPos = [];
const ans = Array.from({ length: n }, () => Array(n).fill(0));

function initialize() {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            visited[i][j] = -1;
        }
    }
}

function canGo(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n && visited[x][y] === -1 && grid[x][y] !== 1;
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

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (grid[i][j] === 3) {
            avoidPos.push([i, j]);
        } else if (grid[i][j] === 2) {
            personPos.push([i, j]);
        }
    }
}

for (let i = 0; i < h; i++) {
    initialize(); // visited 초기화
    queue = new Queue();

    const [px, py] = personPos[i];

    visited[px][py] = 0;
    queue.push([px, py, 0]);
    bfs();

    let minT = Number.MAX_SAFE_INTEGER;

    for (let j = 0; j < m; j++) {
        const [ax, ay] = avoidPos[j];
        if (visited[ax][ay] !== -1) {
            minT = Math.min(minT, visited[ax][ay]);
        }
    }

    if (minT === Number.MAX_SAFE_INTEGER) {
        ans[px][py] = -1;
    } else {
        ans[px][py] = minT;
    }
}

for (const row of ans) {
    console.log(row.join(' '));
}