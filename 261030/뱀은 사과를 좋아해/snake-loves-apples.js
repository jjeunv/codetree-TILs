const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].trim().split(' ').map(Number);
const apples = input.slice(1, 1 + m).map((line) => line.trim().split(' ').map(Number)); // 사과 위치
const snakes = input.slice(1 + m).map((line) => line.trim().split(' ')); // 뱀의 방향 변환 정보
const grid = Array.from({ length: n }, () => Array(n).fill(0)); // 뱀: 1, 사과: 2
const snake = []; // 뱀이 있는 위치들
const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
const mapping = ['R', 'D', 'L', 'U'];
let [cx, cy] = [0, 0]; // 뱀 머리 위치
let t = 0;

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}


function moveSnake() {
    // 뱀 이동
    for (let i = 0; i < k; i++) {
        let [dir, p] = snakes[i]; // dir: 뱀의 방향, p: 뱀이 얼마나 움직일지
        dir = mapping.indexOf(dir);
        p = Number(p);

        for (let j = 0; j < p; j++) {
            t++;
            const [nx, ny] = [cx + dx[dir], cy + dy[dir]];

            // 움직이는 도중 격자를 벗어났거난 경우 종료
            if (!isRange(nx, ny)) {
                return;
            }

            if (grid[nx][ny] !== 2) {
                const [tx, ty] = snake.shift();
                grid[tx][ty] = 0;
            }

            if (grid[nx][ny] === 1) {
                return;
            }

            [cx, cy] = [nx, ny];
            snake.push([cx, cy]);
            grid[cx][cy] = 1;
        }
    }
}

function simulate() {
    // 사과 위치 추가
    for (let i = 0; i < m; i++) {
        const [x, y] = apples[i];
        grid[x - 1][y - 1] = 2;
    }

    grid[cx][cy] = 1;
    snake.push([cx, cy]);
    moveSnake();

    console.log(t);
}

simulate();