const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1).map((line)=>line.split(' ').map(Number));
let seq = Array(n).fill(0);

function isHappySequence(){
    let [curCount, maxCount] = [1, 1];

    for(let i=1; i<n; i++){
        if(seq[i-1]===seq[i]){
            curCount++;
        }else{
            curCount=1;
        }

        maxCount = Math.max(maxCount, curCount);
    }

    return maxCount >= m;
}

let numHappy = 0;

// 가로
for(let x=0; x<n; x++){
    seq = grid[x].slice();

    if(isHappySequence()){
        numHappy++;
    }
}

// 세로
for(let y=0; y<n; y++){
    for(let x=0; x<n; x++){
        seq[x] = grid[x][y];
    }

    if(isHappySequence()){
        numHappy++;
    }
}

console.log(numHappy);