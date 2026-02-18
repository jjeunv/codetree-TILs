const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const COIN_NUM = 9;
const INT_MAX = Number.MAX_SAFE_INTEGER;

// 변수 선언 및 입력
const n = Number(input[0]);
const m = 3;
const grid = input.slice(1, 1 + n);

let coinPos = [];
let selectedPos = [];

let startPos = [-1,-1];
let endPos = [-1,-1];

let ans = INT_MAX;
function dist(a,b){
    const [ax, ay] = a;
    const [bx, by] = b;
    return Math.abs(ax-bx)+Math.abs(ay-by);
}

function calc(){
    let numMoves = dist(startPos, selectedPos[0]);
    for(let i=0; i<m-1; i++){
        numMoves+=dist(selectedPos[i], selectedPos[i+1]);
    }
    numMoves+=dist(selectedPos[m-1], endPos);

    return numMoves;
}

function findMinMoves(currIdx, cnt){
    if(cnt===m){
        ans = Math.min(ans, calc());
        return;
    }

    if(currIdx === coinPos.length){
        return;
    }

    selectedPos.push(coinPos[currIdx]);
    findMinMoves(currIdx+1, cnt+1);
    selectedPos.pop();
    findMinMoves(currIdx+1, cnt);
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (grid[i][j] === 'S') {
            startPos = [i, j];
        }
        if (grid[i][j] === 'E') {
            endPos = [i, j];
        }
    }
}

for (let num = 1; num <= COIN_NUM; num++) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === String(num)) {
                coinPos.push([i, j]);
            }
        }
    }
}

findMinMoves(0, 0);

if (ans === INT_MAX) {
    ans = -1;
}

console.log(ans);