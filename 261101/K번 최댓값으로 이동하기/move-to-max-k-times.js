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

const [n, k] = input[0].trim().split(' ').map(Number);
const grid = input.slice(1, 1 + n).map((line) => line.trim().split(' ').map(Number));
let [r, c] = input[1 + n].trim().split(' ').map((val) => val - 1);
const visited = Array.from({ length: n }, () => Array(n).fill(false));
let maxNum = 0;
const queue = new Queue();

function initialize() {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            visited[i][j] = false;
        }
    }

    maxNum = 0;
}

function canGo(x, y, num) {
    return 0 <= x && x < n && 0 <= y && y < n && !visited[x][y] && grid[x][y] < num;
}

function bfs(num) {
    while (!queue.empty()) {
        const [x, y] = queue.pop();

        const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
        for (let dir = 0; dir < 4; dir++) {
            const [nx, ny] = [x + dx[dir], y + dy[dir]];
            if (canGo(nx, ny, num)) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                maxNum = Math.max(maxNum, grid[nx][ny]);
                bfs(num);
            }
        }
    }
}

function move(x, y) {
    initialize(); // visited, maxNum 초기화

    visited[x][y] = true;
    queue.push([x, y]);
    bfs(grid[x][y]);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (visited[i][j] && grid[i][j] === maxNum) {
                [r, c] = [i, j];
                return;
            }
        }
    }
}

for (let i = 0; i < k; i++) {
    move(r, c);
}

console.log(r + 1, c + 1);