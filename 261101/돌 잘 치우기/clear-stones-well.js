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

const [n, k, m] = input[0].trim().split(' ').map(Number);
const grid = input.slice(1, 1 + n).map((line) => line.trim().split(' ').map(Number));
const starts = input.slice(1 + n).map((line) => line.trim().split(' ').map((val) => val - 1));
const rockPos = [];
const visited = Array.from({ length: n }, () => Array(n).fill(false));
const queue = new Queue();
let cnt = 0;
let ans = 0;

function initialize() {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            visited[i][j] = false;
        }
    }

    cnt = 0;
}

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
                visited[nx][ny] = true;
                cnt++;
                queue.push([nx, ny]);
                bfs();
            }
        }
    }
}

function findMax() {
    initialize(); // visited, cnt 초기화

    for (let i = 0; i < k; i++) {
        const [r, c] = starts[i];

        if (visited[r][c]) continue;

        visited[r][c] = true;
        cnt++;
        queue.push([r, c]);
        bfs();
    }

    return cnt;
}

function cleanRock(currIdx, cnt) {
    if (cnt === m) {
        ans = Math.max(ans, findMax());
        return;
    }

    if (currIdx === rockPos.length) {
        return;
    }

    const [x, y] = rockPos[currIdx];

    grid[x][y] = 0;
    cleanRock(currIdx + 1, cnt + 1);
    grid[x][y] = 1;

    cleanRock(currIdx + 1, cnt)
}


// 돌 위치 초기화
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1) {
            rockPos.push([i, j]);
        }
    }
}

cleanRock(0, 0);
console.log(ans);