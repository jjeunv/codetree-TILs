const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1).map((line) => line.split(' ').map(Number));

function getArea(k) {
    return Math.pow(k, 2) + Math.pow(k + 1, 2);
}

function isRange(x, y){
    return 0<=x && x<n && 0<=y && y<n;
}

function getNumOfGold(x, y, k) {
    const dx = [1, 1, -1, -1];
    const dy = [-1, 1, 1, -1];

    let numOfGold = grid[x][y];

    for(let curK=1; curK<=k; curK++){
        let curX=x-curK, curY=y;
        for(let dir=0; dir<4; dir++){
            for(let step=0; step<curK; step++){
                if(isRange(curX, curY)){
                    numOfGold += grid[curX][curY];
                }

                curX += dx[dir];
                curY += dy[dir];
            }
        }
    }

    return numOfGold;
}

let maxNumOfGold = 0;

for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
        for (let k = 0; k <= (n - 1) * 2; k++) {
            let numOfGold = getNumOfGold(x, y, k);

            if (numOfGold * m >= getArea(k)) {
                maxNumOfGold = Math.max(maxNumOfGold, numOfGold);
            }
        }
    }
}

console.log(maxNumOfGold);