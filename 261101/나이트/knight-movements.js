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

const n = Number(input[0]);
const [r1, c1, r2, c2] = input[1].trim().split(' ').map((val) => val - 1);
const queue = new Queue();
const visited = Array.from({ length: n }, () => Array(n).fill(-1));
const dx = [-2, -1, 1, 2, 2, 1, -1, -2], dy = [1, 2, 2, 1, -1, -2, -2, -1];

function canGo(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n && visited[x][y] === -1;
}

function bfs() {
    while (!queue.empty()) {
        const [x, y, d] = queue.pop();

        for (let dir = 0; dir < 8; dir++) {
            const [nx, ny] = [x + dx[dir], y + dy[dir]];
            if (canGo(nx, ny)) {
                visited[nx][ny] = d + 1;
                queue.push([nx, ny, d + 1]);
            }
        }
    }
}

visited[r1][c1] = 0;
queue.push([r1, c1, 0]);
bfs();

console.log(visited[r2][c2]);