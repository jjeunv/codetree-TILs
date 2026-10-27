const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MIN = Number.MIN_SAFE_INTEGER;

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1).map((line) => line.split(' ').map(Number));
const board = Array.from({ length: n }, () => Array.from({ length: m }).fill(0));

function clearBoard(){
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            board[i][j] = 0;
        }
    }
}

function drawBoard(x1, y1, x2, y2){
    for(let i=x1; i<=x2; i++){
        for(j=y1; j<=y2; j++){
            board[i][j]++;
        }
    }
}

function checkBoard(){
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(board[i][j]>=2){
                return false;
            }
        }
    }
    return true;
}

function rectSum(x1, y1, x2, y2){
    return grid.slice(x1, x2+1).reduce((sum, row)=>
    sum + row.slice(y1, y2+1).reduce((rowSum, value)=> rowSum+value, 0), 0);
}

function canCalSum(x1, y1, x2, y2, x3, y3, x4, y4){
    clearBoard();
    drawBoard(x1, y1, x2, y2);
    drawBoard(x3, y3, x4, y4);
    
    return checkBoard();
}

function findMaxSumWithRect(x1, y1, x2, y2) {
    let maxSum = INT_MIN;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            for (let k = i; k < n; k++) {
                for (let l = j; l < m; l++) {
                    if (canCalSum(x1, y1, x2, y2, i, j, k, l)) {
                        maxSum = Math.max(maxSum, rectSum(x1, y1, x2, y2) + rectSum(i, j, k, l));
                    }
                }
            }
        }
    }

    return maxSum;
}

function findMaxSum() {
    let maxSum = INT_MIN;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            for (let k = i; k < n; k++) {
                for (let l = j; l < m; l++) {
                    maxSum = Math.max(maxSum, findMaxSumWithRect(i, j, k, l));
                }
            }
        }
    }

    return maxSum;
}

const ans = findMaxSum();
console.log(ans);